// @flow
import React from 'react'
import type { History } from 'react-router-dom'

import Container from '../Container/Container'
import './Info.css'

type InfoPropsType = {
	history: History,
}

const Info = (props: InfoPropsType): React$Element<*> => (
	<Container from="/" history={props.history}>
		<div className="infocontainer">
			<div className="title">UNDER DEVELOPMENT</div>
		</div>
	</Container>
)

export default Info
