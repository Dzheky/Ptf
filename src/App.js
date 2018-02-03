import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { AnimatedRoute } from 'react-router-transition'
import Info from './containers/Info/Info'
import Main from './containers/Main/Main'
import './App.css'

const history = createHistory()

const App = () => (
	<Router history={history}>
		<div className="container">
			<AnimatedRoute
				path="/"
				component={Main}
				exact
				atLeave={{ opacity: 0, transform: -100 }}
				atEnter={{ opacity: 0, transform: -100 }}
				atActive={{ opacity: 1, transform: 0 }}
				mapStyles={styles => ({
					opacity: styles.opacity,
					transform: `translateY(${styles.transform}vh)`,
				})}
			/>
			<Route path="/info" component={Info} />
		</div>
	</Router>
)
export default App
