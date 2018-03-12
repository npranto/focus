import React, {Component} from 'react';
import Media from 'react-media';
import {connect} from 'react-redux';
import $ from 'jquery';

import * as actionCreators from './../../actions';
import TaskBoard from './../TaskBoard/TaskBoard';
import CreateTask from './../CreateTask/CreateTask';
import './Dashboard.css';

class Dashboard extends Component {

	constructor(props) {
		super(props);

		
	}

	componentDidMount() {
		setTimeout(() => {
			if (this.props.auth.isAuthenticated) {
				this.props.getAllTasksByCurrentUser(this.props.auth.currentUser._id);
			}
		}, 1000);
	}

	renderFloatingCreateTaskButton() {
		return (
			  <div className="fixed-action-btn">
			    <a className="btn-floating btn-large red modal-trigger" href="#createNewTaskModal">
			      <i className="large material-icons">mode_edit</i>
			    </a>
			  </div>
		)
	}	

	renderCreateNewTaskModal() {
		return <CreateTask />   
	}

	renderMiniDashboard() {
		return (
			<div className="dashboard-mini">
			    <div className="col s12">
			        <ul className="tabs">
				        <li className="tab col s6"><a href="#trackProgress"> Track Progress </a></li>
				        <li className="tab col s6"><a href="#tasks"> Tasks </a></li>
			        </ul>
			    </div>
			    <div id="trackProgress" className="col s12" className="track-progress-container">
					Track Progress
				</div>
				<div id="tasks" className="col s12" className="tasks-container">
					Tasks
				</div>
				{
					this.renderFloatingCreateTaskButton()
				}
				{
					this.renderCreateNewTaskModal()
				}
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
					<TaskBoard />
				</div>
				{
					this.renderFloatingCreateTaskButton()
				}

				{
					this.renderCreateNewTaskModal()
				}
			</div>
		)
	}

	render() {
		const {tasks, editingTask, currentTask} = this.props.components.dashboard;
		
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

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		components: state.components,
		form: state.form
	}
}

export default connect(mapStateToProps, actionCreators)(Dashboard);


