import React, {Component} from 'react';
import Media from 'react-media';
import {connect} from 'react-redux';
import $ from 'jquery';

import * as actionCreators from './../../actions';
import TaskBoard from './../TaskBoard/TaskBoard';
import CreateTask from './../CreateTask/CreateTask';
import EditTask from './../EditTask/EditTask';
import './Dashboard.css';
import TrackProgress from "../TrackProgress/TrackProgress";

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

	renderEditTaskModal() {
		return <EditTask />   
	}

	renderMiniDashboard(tasks) {
		return (
			<div className="dashboard-mini">
			    <div className="col s12">
			        <ul className="tabs">
				        <li className="tab col s6"><a href="#trackProgress"> Track Progress </a></li>
				        <li className="tab col s6"><a href="#tasks"> Tasks </a></li>
			        </ul>
			    </div>
			    <div id="trackProgress" className="col s12" className="track-progress-container">
                    <TrackProgress tasks={tasks} />
				</div>
				<div id="tasks" className="col s12" className="tasks-container">
					<TaskBoard tasks={tasks} />
				</div>
				{
					this.renderFloatingCreateTaskButton()
				}
				{
					this.renderCreateNewTaskModal()
				}
				{
					this.renderEditTaskModal()
				}
			</div>
		)
	}

	renderDashboard(screenClass, tasks) {
		return (
			<div className={`dashboard ${screenClass}`}>
				<div className="track-progress-container">
                    <TrackProgress tasks={tasks} />
				</div>
				<div className="tasks-container">
					<TaskBoard tasks={tasks} />
				</div>
				{
					this.renderFloatingCreateTaskButton()
				}

				{
					this.renderCreateNewTaskModal()
				}
				{
					this.renderEditTaskModal()
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
	        			? this.renderDashboard('dashboard-large-screen', tasks)
	        			: (
	        				<Media query={{maxWidth: 899, minWidth: 415}}>
					        	{matches =>
					        		matches 
					        			? this.renderDashboard('dashboard-medium-screen', tasks)
					        			: this.renderMiniDashboard(tasks)
					        
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


