import React, {Component} from 'react';
import $ from 'jquery';
import Media from 'react-media';
import {connect} from 'react-redux';
import MdInfoOutline from 'react-icons/lib/md/info-outline';

import Timer from './../Timer/Timer';
import './CurrentTask.css';

class CurrentTask extends Component {

	constructor(props) {
		super(props);

		$(document).ready(function(){
		    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	    	$('#currentTaskModal').modal();
		});
	}

	render() {
		const {currentTask} = this.props.components.dashboard;
		return (
			<div id="currentTaskModal" className="current-task modal bottom-sheet">
				<div className="modal-content">
					<div className="task-and-timer">
						<Media query={{minWidth: 400}}>
							{matches => 
								matches 
									? (
										<div className="task" style={{width: (currentTask && currentTask.duration) ? '60%' : '100%'}}>
											{
												(currentTask && currentTask.title) 
													? <h4> {currentTask.title} </h4>
													: ""
											}
											{
												(currentTask && currentTask.description) 
													? <p> {currentTask.description} </p>
													: ""
											}
											{
												(currentTask && currentTask.levelOfImportance) 
													? <p className="level-of-importance"> <MdInfoOutline size={16} /> {currentTask.levelOfImportance.label} </p>
													: ""
											}
										</div>
									)
									: (
										<div className="task" style={{width: '100%'}}>
											{
												(currentTask && currentTask.title) 
													? <h4> {currentTask.title} </h4>
													: ""
											}
											{
												(currentTask && currentTask.description) 
													? <p> {currentTask.description} </p>
													: ""
											}
											{
												(currentTask && currentTask.levelOfImportance) 
													? <p className="level-of-importance"> <MdInfoOutline size={16} /> {currentTask.levelOfImportance.label} </p>
													: ""
											}
										</div>
									)
							}
						</Media>
						<Media query={{minWidth: 400}}>
							{matches => 
								matches 
									? (
										(currentTask && currentTask.duration)
											? (
												<div className="timer-container">
													<Timer duration={currentTask.duration}/>
												</div>
											)
											: ""
									)
									: ""
							}
						</Media>
					</div>
				</div>
				<div className="modal-footer">
					<a href="#!" className="done modal-action modal-close waves-effect waves-light green darken-3 btn"> Done </a>
					<a href="#!" className="cancel modal-action modal-close btn-flat "> Cancel </a>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		components: state.components
	}
}

export default connect(mapStateToProps)(CurrentTask);

