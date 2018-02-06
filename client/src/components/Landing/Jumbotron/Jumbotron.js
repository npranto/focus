import React, { Component } from 'react';

import './Jumbotron.css';

class Jumbotron extends Component {
	render() {
		return (
			<div className="jumbotron-component">
				<h1 className="title"> Focus</h1>
				<h3 className="subtitle"> Get your work <br/> done today! </h3>
				<div className="actions">
					<a href="/sign-in" className="waves-effect waves-light btn deep-orange darken-4"> Login </a>
					<br />
					<a href="/sign-up" className="waves-effect waves-light btn green darken-3"> Create New Account </a>
				</div>
			</div>	
		)
	}
}

export default Jumbotron;