// @flow
import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import arrow from '../../imgs/arrow_down.png'
import styles from './Main.css'

type MainProps = {
	history: Object,
}

class Main extends Component<MainProps> {
	componentDidMount() {
		this.redirecting = false
		document.addEventListener('mousewheel', this.handleScroll)
		document.addEventListener('touchstart', this.startTouch)
		document.addEventListener('touchend', this.endTouch)
	}

	componentWillUnmount() {
		document.removeEventListener('mousewheel', this.handleScroll)
		document.removeEventListener('touchstart', this.startTouch)
		document.removeEventListener('touchend', this.endTouch)
	}

	startTouch = (e) => {
		this.start = e.changedTouches[0].clientY
	}

	endTouch = (e) => {
		if ((this.start - e.changedTouches[0].clientY) > 150) {
			this.props.history.push('/info')
		}
	}

	handleScroll = debounce((e) => {
		const { deltaY } = e

		if (deltaY > 5) {
			this.props.history.push('/info')
		}
	}, 50)

	render() {
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
				<img className={styles.arrowDown} src={arrow} alt="Scroll Down" />
			</div>
		)
	}
}

export default Main
