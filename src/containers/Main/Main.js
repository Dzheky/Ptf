// @flow
import React, { Component } from 'react'
import { Link, History } from 'react-router-dom'
import arrow from '../../imgs/arrow_down.png'
import styles from './Main.css'

type MainPropsType = {
	history: History,
}

class Main extends Component<MainPropsType> {
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
		if ((this.start - e.changedTouches[0].clientY) > 150) {
			this.props.history.push('/info')
		}
	}

	handleScroll = (e: WheelEvent) => {
		const { deltaY } = e

		if (deltaY > 5 && !this.routing) {
			this.routing = true
			this.props.history.push('/info')
			this.timer = setTimeout(() => {
				this.routing = false
			}, 500)
		}
	}

	render(): React$Element<*> {
		return (
			<div className={styles.App}>
				<div className={styles.blueSquare}>
					<div className={styles.name}>
						EVGENY
					</div>
				</div>
				<div className={styles.redSquare}>
					<div className={styles.lastName}>
						KLIMENCHENKO
					</div>
				</div>
				<div className={styles.yellowSquare} />
				<Link to="/info" className={styles.arrowDownContainer}>
					<img className={styles.arrowDown} src={arrow} alt="Scroll Down" />
				</Link>
			</div>
		)
	}
}

export default Main
