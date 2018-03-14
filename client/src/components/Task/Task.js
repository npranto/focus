import React, {Component} from 'react';
import Media from 'react-media';
import {connect} from 'react-redux';

import * as actionCreator from './../../actions';
import './Task.css';

class Task extends Component {

	renderTask(task, contentHeights) {
		return (
			<div className={`task ${task.complete ? 'green lighten-4' : 'deep-orange lighten-4'}`}>
				<div className="title" style={{height: contentHeights.title, overflow: 'auto'}}>
					{task.title}
				</div>
				<div className="description" style={{height: contentHeights.description, overflow: 'auto'}}>
					{task.description ? task.description : <i className="grey-text"> No description </i>}
				</div>
				{
					(!task.complete) 
						? (
							<div className="actions">
								<a href="#editTaskModal" onClick={() => this.props.setEditingTask(task)} className="edit orange-text btn-flat modal-trigger"> Edit </a>
								<a className="delete red-text btn-flat"> Delete </a>
								<a onClick={() => this.props.assignTaskAsComplete(task)} className="done green-text btn-flat"> Done </a>
							</div>
						) 
						: ""
				}
				
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

export default connect(null, actionCreator)(Task);
