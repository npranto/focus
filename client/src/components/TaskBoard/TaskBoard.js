import React, {Component} from 'react';
import {connect} from 'react-redux';

import Tasks from './../Tasks/Tasks';
import TaskViewSwitcher from './../TaskViewSwitcher/TaskViewSwitcher';
import './TaskBoard.css';

class TaskBoard extends Component {
	render() {
		const {tasks} = this.props;
		const {viewModes} = this.props.components.taskBoard;
		const activeViewMode = viewModes.find((viewMode) => {
			return viewMode.active;
		});

		return (
			<div className="task-board">
				<div className="header">
					<h4> {activeViewMode.title} </h4>
					<div className="task-view-switcher-container">
						<TaskViewSwitcher />
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

export default connect(mapStateToProps)(TaskBoard);