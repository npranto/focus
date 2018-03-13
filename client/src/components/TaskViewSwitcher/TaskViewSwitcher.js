import React, {Component} from 'react';
import MdFormatListBulleted from 'react-icons/lib/md/format-list-bulleted';
import TiCalender from 'react-icons/lib/ti/calendar';
import MdBorderInner from 'react-icons/lib/md/border-inner';
import Media from 'react-media';

import './TaskViewSwitcher.css';

class TaskViewSwitcher extends Component {

	renderIconBasedOnViewModeId(id, iconSize) {
		if (id === 'tasks') {
			return <MdFormatListBulleted size={iconSize} />;
		} else if (id === 'calendar') {
			return <TiCalender size={iconSize} />
		} else if (id === 'prioritize-mode') {
			return <MdBorderInner size={iconSize} />
		}
	}

	renderViewModes(viewModes) {
		return viewModes.map((viewMode, index) => {
			return (
				<a key={index} onClick={() => this.props.onChangeViewMode(viewMode.id)} className={`${viewMode.id}-icon icon-container tooltipped ${viewMode.active ? 'active' : ''}`} data-position="bottom" data-delay="50" data-tooltip={viewMode.title}>
                    <Media query="(min-width: 1000px)">
                        {matches =>
                            matches
                                ? this.renderIconBasedOnViewModeId(viewMode.id, 28)
                                : this.renderIconBasedOnViewModeId(viewMode.id, 24)

                        }
                    </Media>
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


