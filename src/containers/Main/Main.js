import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import arrow from '../../imgs/arrow_down.png'
import styles from './Main.css'

class Main extends Component {
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
			<div className="App">
				<div className="blueSquare">
					<div className="name">
						EVGENY
					</div>
				</div>
				<div className="redSquare">
					<div className="lastName">
						KLIMENCHENKO
					</div>
				</div>
				<div className="yellowSquare" />
				<img className="arrowDown" src={arrow} alt="Scroll Down" />
			</div>
		)
	}
}

export default Main
