import React, {Component} from 'react';

import Tasks from './../Tasks/Tasks';
import './TaskBoard.css';

class TaskBoard extends Component {
	render() {
		const {tasks} = this.props;
		return (
			<div className="task-board">
				<div className="header">
					<h4> Tasks </h4>
					<div className="task-view-switcher-container">
						TaskViewSwitcher
					</div>
				</div>
				<div className="tasks">
					<Tasks tasks={tasks}/>
				</div>
			</div>
		)
	}
}

export default TaskBoard;