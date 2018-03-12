import React, {Component} from 'react';

import './TaskBoard.css';

class TaskBoard extends Component {
	render() {
		return (
			<div className="task-board">
				<div className="header">
					<h4> Tasks </h4>
					<div className="task-view-switcher-container">
						TaskViewSwitcher
					</div>
				</div>
				<div className="tasks">
					Tasks
				</div>
			</div>
		)
	}
}

export default TaskBoard;