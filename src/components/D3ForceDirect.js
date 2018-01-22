import React, { Component } from 'react'
import * as d3 from 'd3'

class D3ForceDirect extends Component {
	componentDidMount() {
		this.svg = d3.select('.forcenet')
			.append('svg')
			.attr('width', '40vw')
			.attr('height', '70vh')
		
		this.svg.append('text')
	}

	render() {
		return (
			<div className="forcenet"/>
		)
	}
}

export default D3ForceDirect