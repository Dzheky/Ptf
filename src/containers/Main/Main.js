// @flow
import React, { Component } from 'react'
// import classnames from 'classnames/bind'
import { Link, History } from 'react-router-dom'
import arrow from './Arrow_Down.png'
import styles from './Main.css'

// const cx = classnames.bind(styles)
const BLUE_ALPHA = 0.1
const RED_ALPHA = 0.2
const YELLOW_ALPHA = 0.3

const MAX = 30

type MainPropsType = {
	history: History,
}

type OrientationEventType = {
	beta?: number,
}

class Main extends Component<MainPropsType, *> {
	state = {
		beta: 0,
	}

	componentDidMount() {
		document.addEventListener('wheel', this.handleScroll)
		document.addEventListener('touchstart', this.startTouch)
		document.addEventListener('touchend', this.endTouch)
		window.addEventListener('deviceorientation', this.handleOrientation)
	}

	componentWillUnmount() {
		document.removeEventListener('wheel', this.handleScroll)
		document.removeEventListener('touchstart', this.startTouch)
		document.removeEventListener('touchend', this.endTouch)
		window.removeEventListener('deviceorientation', this.handleOrientation)
		clearTimeout(this.timer)
	}

	timer: TimeoutID
	start: number
	routing: boolean

	startTouch = (e: TouchEvent) => {
		this.start = e.changedTouches[0].clientY
	}

	handleOrientation = (e: OrientationEventType) => {
		/*:: if (e.beta) {*/
		let y = e.beta === null ? 0 : e.beta - 25

		if (y > MAX || y < -MAX) {
			y = y > MAX ? MAX : -MAX
		}

		this.setState({
			beta: y,
		})
		/*:: }*/
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
		const { beta } = this.state

		return (
			<div className={styles.App}>
				<div className={styles.blueSquare} style={{ top: `${5 + (BLUE_ALPHA * beta)}vh` }}>
					<div className={styles.name}>
						EVGENY
					</div>
				</div>
				<div className={styles.redSquare} style={{ top: `${30 + (RED_ALPHA * beta)}vh` }}>
					<div className={styles.lastName}>
						KLIMENCHENKO
					</div>
				</div>
				<div className={styles.yellowSquare} style={{ top: `${50 + (YELLOW_ALPHA * beta)}vh` }} />
				<Link to="/info" className={styles.arrowDownContainer}>
					<img src={arrow} className={styles.arrowDown} alt="scroll down arrow" />
				</Link>
			</div>
		)
	}
}

export default Main
