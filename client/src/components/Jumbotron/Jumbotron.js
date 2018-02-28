import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Jumbotron.css';

class Jumbotron extends Component {
	render() {
		return (
			<div className="jumbotron">
				<div className="jumbotron-background-picture">
					<h1 className="title"> Focus </h1>
					<h5 className="subtitle"> Get your work <br /> done today! </h5>
					<div className="jumbotron-actions">
						<Link to="/sign-in" class="waves-effect waves-light btn red darken-4"> Login </Link>
						<br />
						<Link to="/sign-up" class="waves-effect waves-light btn green darken-4"> Sign Up </Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Jumbotron;