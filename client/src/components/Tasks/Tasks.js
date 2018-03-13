import React, {Component} from 'react';

import Task from './../Task/Task';
import './Tasks.css';

class Tasks extends Component {

	renderTasks(tasks) {
		return tasks.map((task, index) => {
			return (
				<div key={index} className="col s12 m6 l6 task"> 
					<Task task={task}/> 
				</div>
			)
		})
	}

	render() {
		const {tasks} = this.props;
		return (
			<div className="tasks row">
				{
					this.renderTasks(tasks)
				}
			</div>
		)
	}
}

export default Tasks;