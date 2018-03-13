import React, {Component} from 'react';
import Media from 'react-media';

import './Task.css';

class Task extends Component {

	renderTask(task, contentHeights) {
		return (
			<div className="task grey lighten-5">
				<div className="title" style={{height: contentHeights.title, overflow: 'auto'}}>
					{task.title}
				</div>
				<div className="description" style={{height: contentHeights.description, overflow: 'auto'}}>
					{task.description ? task.description : <i className="grey-text"> No description </i>}
				</div>
				<div className="actions">
					<a className="edit orange-text btn-flat"> Edit </a>
					<a className="delete red-text btn-flat"> Delete </a>
					<a className="done green-text btn-flat"> Done </a>
				</div>
			</div>
		)
	}

	render() {
		const {task} = this.props;

		return (
			<Media query="(min-width: 1000px)">
	        	{matches =>
	        		matches 
	        			? this.renderTask(task, {title: 65, description: 45})
	        			: (
	        				<Media query="(min-width: 750px)">
					        	{matches =>
					        		matches 
					        			? this.renderTask(task, {title: 65, description: 65})
					        			: this.renderTask(task, {title: 100, description: 85})
					        
					        }
					        </Media>
	        			)
	        
	        }
	        </Media>
		)
	}
}

export default Task;