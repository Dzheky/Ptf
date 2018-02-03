import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { AnimatedRoute } from 'react-router-transition'
import Info from './containers/Info/Info'
import Main from './containers/Main/Main'
import styles from './App.css'

const history = createHistory()

const App = () => (
	<Router history={history}>
		<div className={styles.container}>
			<AnimatedRoute
				path="/"
				component={Main}
				exact
				atLeave={{ opacity: 0, transform: -100 }}
				atEnter={{ opacity: 0, transform: -100 }}
				atActive={{ opacity: 1, transform: 0 }}
				mapStyles={style => ({
					opacity: style.opacity,
					transform: `translateY(${style.transform}vh)`,
				})}
			/>
			<Route path="/info" component={Info} />
		</div>
	</Router>
)
export default App
