import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Media from "react-media";

import YoungManWorkingAtDeskXs from './../../assets/young-man-working-at-desk-xs.jpeg';
import './Jumbotron.css';

class Jumbotron extends Component {
	render() {
		return (
			<div className="jumbotron grey lighten-4">
				<Media query="(min-width: 500px)">
		          {matches =>
		            matches ? (
		                <div className="jumbotron-background-picture large-screen">
							<h1 className="title"> Focus </h1>
							<h5 className="subtitle"> Get your work <br /> done today! </h5>
							<div className="jumbotron-actions">
								<Link to="/sign-in" className="waves-effect waves-light btn red darken-4"> Login </Link>
								<br />
								<Link to="/sign-up" className="waves-effect waves-light btn green darken-4"> Sign Up </Link>
							</div>
						</div>
		            ) : (
		            	<div className="small-screen">
		            		<h2 className="title center-align"> Focus </h2>
							<div className="jumbotron-picture">
								<img src={YoungManWorkingAtDeskXs} alt="Young Man Working at Desk" />
							</div>
							<h5 className="subtitle center-align"> Get your work <br /> done today! </h5>
							<div className="jumbotron-actions center-align">
								<Link to="/sign-in" className="waves-effect waves-light btn red darken-4"> Login </Link>
								<br />
								<Link to="/sign-up" className="waves-effect waves-light btn green darken-4"> Sign Up </Link>
							</div>
						</div>
		            )
		          }
		        </Media>
			</div>
		)
	}
}

export default Jumbotron;