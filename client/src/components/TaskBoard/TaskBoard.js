import React, {Component} from 'react';
import {connect} from 'react-redux';

import Tasks from './../Tasks/Tasks';
import TaskViewSwitcher from './../TaskViewSwitcher/TaskViewSwitcher';
import * as actionCreators from './../../actions';
import './TaskBoard.css';

class TaskBoard extends Component {
	render() {
		const {tasks} = this.props;
		const {viewModes} = this.props.components.taskBoard;
		const activeViewMode = viewModes.find((viewMode) => {
			console.log(viewMode);
			return viewMode.active === true;
		});

		return (
			<div className="task-board">
				<div className="header">
					<h4> {activeViewMode.title} </h4>
					<div className="task-view-switcher-container">
						<TaskViewSwitcher 
							viewModes={viewModes}
							onChangeViewMode={(viewModeId) => this.props.changeTaskViewMode(viewModeId)} />
					</div>
				</div>
				<div className="tasks">
					<Tasks tasks={tasks}/>
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

export default connect(mapStateToProps, actionCreators)(TaskBoard);