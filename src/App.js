import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { AnimatedRoute } from 'react-router-transition';
import D3ForceNet from './components/D3ForceDirect'
import Info from './containers/Info/Info.js'
import './App.css'

const history = createHistory()

 const Main = () => (
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
		<div className="yellowSquare"/>
	</div>
)

class App extends Component {
	componentDidMount() {
		document.addEventListener('mousewheel', this.handleScroll)
	}

	handleScroll = (e) => {
		const { deltaY } = e

		if (deltaY > 5 && history.location.pathname === '/') {
			history.push('/info')
		}
	}

	render() {
		return (
			<Router history={history}>
				<div>
						<AnimatedRoute
							path="/"
							component={Main} 
							exact
							atLeave={{ opacity: 0, transform: -100 }}
							atEnter={{ opacity: 0, transform: -100 }}
							atActive={{ opacity: 1, transform: 0 }}
							mapStyles={(styles) => ({
								opacity: styles.opacity,
								transform: `translateY(${styles.transform}vh)`
							})}
						/>
						<Route path="/info" component={Info}/>
				</div>
			</Router>
		)
	}
}
export default App
