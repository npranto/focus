import React, { Component } from 'react';

import './Jumbotron.css';

class Jumbotron extends Component {
	render() {
		return (
			<div className="jumbotron-component">
				<h1 className="title"> Focus</h1>
				<h2 className="subtitle"> Get your work <br/> done today </h2>
				<div className="actions">
					<a class="waves-effect waves-light btn deep-orange darken-4"> Login </a>
					<br />
					<a class="waves-effect waves-light btn green darken-3"> Sign Up </a>
				</div>
			</div>	
		)
	}
}

export default Jumbotron;