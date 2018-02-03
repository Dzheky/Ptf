import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Container.css'

class Container extends Component {
	componentDidMount() {
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
		this.redirecting = false
	}

	endTouch = (e) => {
		if ((this.start - e.changedTouches[0].clientY) > 150 && !this.redirecting) {
			this.redirecting = true
			this.props.history.push('/info')
		}
	}

	handleScroll = (e) => {
		const { deltaY } = e

		if (deltaY > 5) {
			this.props.history.push('/info')
		}
	}

	render() {
		return (
			<div className="container">
				<div className="title">INFO ABOUT ME</div>
			</div>
		)
	}
}

export default Container