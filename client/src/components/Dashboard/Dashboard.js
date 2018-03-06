import React, {Component} from 'react';
import Media from 'react-media';

import './Dashboard.css';

class Dashboard extends Component {

	renderMiniDashboard() {
		return (
			<div class="dashboard-mini">
			    <div class="col s12">
			        <ul class="tabs">
				        <li class="tab col s6"><a href="#trackProgress"> Track Progress </a></li>
				        <li class="tab col s6"><a href="#tasks"> Tasks </a></li>
			        </ul>
			    </div>
			    <div id="trackProgress" class="col s12" className="track-progress-container">
					Track Progress
				</div>
				<div id="tasks" class="col s12" className="tasks-container">
					Tasks
				</div>
				<div className="fixed-action-btn">
					<a className="btn-floating btn-large red">
						<i className="large material-icons">mode_edit</i>
					</a>
					<ul>
						<li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
						<li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
					</ul>
				</div>
			</div>
		)
	}

	renderDashboard(screenClass) {
		return (
			<div className={`dashboard ${screenClass}`}>
				<div className="track-progress-container">
					Track Progress
				</div>
				<div className="tasks-container">
					Tasks
				</div>
				<div className="fixed-action-btn">
					<a className="btn-floating btn-large red">
						<i className="large material-icons">mode_edit</i>
					</a>
					<ul>
						<li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
						<li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
					</ul>
				</div>
			</div>
		)
	}

	render() {
		return (
			<Media query="(min-width: 900px)">
	        	{matches =>
	        		matches 
	        			? this.renderDashboard('dashboard-large-screen')
	        			
	        			: (
	        				<Media query={{maxWidth: 899, minWidth: 415}}>
					        	{matches =>
					        		matches 
					        			? this.renderDashboard('dashboard-medium-screen')
					        			: this.renderMiniDashboard()
					        
					        }
					        </Media>
	        			)
	        
	        }
	        </Media>
		)
	}
}

export default Dashboard;