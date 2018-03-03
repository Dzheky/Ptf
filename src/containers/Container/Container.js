// @flow
import React, { Component, type Node } from 'react'
import type { History } from 'react-router-dom'

import styles from './Container.css'

type ContainerPropsType = {
	children: Node | Node[],
	history?: History,
	to?: string,
	from: string,
}

class Container extends Component<ContainerPropsType, *> {
	componentDidMount() {
		document.addEventListener('wheel', this.handleScroll)
		document.addEventListener('touchstart', this.startTouch)
		document.addEventListener('touchend', this.endTouch)
	}

	componentWillUnmount() {
		document.removeEventListener('wheel', this.handleScroll)
		document.removeEventListener('touchstart', this.startTouch)
		document.removeEventListener('touchend', this.endTouch)
		clearTimeout(this.timer)
	}

	timer: TimeoutID
	start: number
	routing: boolean

	startTouch = (e: TouchEvent) => {
		this.start = e.changedTouches[0].clientY
	}

	endTouch = (e: TouchEvent) => {
		const { history } = this.props
		if ((this.start - e.changedTouches[0].clientY) > 150 && history) {
			history.push('/info')
		}
	}

	handleScroll = (e: WheelEvent) => {
		const { deltaY } = e
		const { to, from, history } = this.props

		if (!this.routing && history) {
			if (deltaY > 5 && to) {
				this.routing = true
				history.push(to)
				this.timer = setTimeout(() => {
					this.routing = false
				}, 500)
			} else if (deltaY < 0 && from) {
				this.routing = true
				history.push(from)
				this.timer = setTimeout(() => {
					this.routing = false
				}, 500)
			}
		}
	}

	render(): React$Element<*> {
		const { children } = this.props

		return (
			<div className={styles.container}>
				{children}
			</div>
		)
	}
}

export default Container
