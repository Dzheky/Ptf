// @flow
import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { AnimatedRoute } from 'react-router-transition'
import Info from './containers/Info/Info'
import Main from './containers/Main/Main'
import styles from './App.css'

const history = createHistory()

type MapStyleReturnType = {
	position: string,
	opacity: number,
	transform: string,
	height: string,
	width: string,
	overflow: string,
}

const animationStart = {
	opacity: 0,
	transform: -100,
	height: 100,
}

const animationFinish = {
	opacity: 1,
	transform: 0,
	height: 0,
}

const App = (): React$Element<*> => (
	<Router history={history}>
		<div className={styles.container}>
			<AnimatedRoute
				path="/"
				component={Main}
				className={styles.mainContainer}
				exact
				atLeave={animationStart}
				atEnter={animationStart}
				atActive={animationFinish}
				mapStyles={(style: typeof animationStart): MapStyleReturnType => ({
					position: 'absolute',
					opacity: style.opacity,
					transform: `translateY(${style.transform}vh)`,
					height: '100%',
					width: '100%',
					overflow: 'hidden',
				})}
			/>
			<Route path="/info" component={Info} />
		</div>
	</Router>
)
export default App
