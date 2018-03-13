import React, {Component} from 'react';
import MdFormatListBulleted from 'react-icons/lib/md/format-list-bulleted';
import TiCalender from 'react-icons/lib/ti/calendar';
import MdBorderInner from 'react-icons/lib/md/border-inner';

import './TaskViewSwitcher.css';

class TaskViewSwitcher extends Component {

	renderIconBasedOnViewModeId(id) {
		if (id === 'tasks') {
			return <MdFormatListBulleted size={28} />;
		} else if (id === 'calendar') {
			return <TiCalender size={28} />
		} else if (id === 'prioritize-mode') {
			return <MdBorderInner size={28} />
		}
	}

	renderViewModes(viewModes) {
		return viewModes.map((viewMode, index) => {
			return (
				<a key={index} onClick={() => this.props.onChangeViewMode(viewMode.id)} className={`${viewMode.id}-icon icon-container tooltipped ${viewMode.active ? 'active' : ''}`} data-position="bottom" data-delay="50" data-tooltip={viewMode.title}>
					{this.renderIconBasedOnViewModeId(viewMode.id)}
				</a>
			)
		})
	}

	render() {
		const {viewModes} = this.props;
		return (
			<div className="task-view-switcher">
				{
					this.renderViewModes(viewModes)
				}
			</div>
		)
	}
}

export default TaskViewSwitcher;


