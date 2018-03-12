import React, {Component} from 'react';

import './Tasks.css';

class Tasks extends Component {

	renderTasks(tasks) {
		return tasks.map((task, index) => {
			return (
				<div key={index} className="col s12 m6 l4 task"> {task.title} </div>
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
				<div className="col s12 m6 l4 task"> We hope you have enjoyed using Materialize and if you feel like it has helped you out and want to support the team you can help us by donating or backing us on Patreon. Any amount would help support and continue development on this project and is greatly appreciated. </div>
				<div className="col s12 m6 l4 task"> We hope you have enjoyed using Materialize and if you feel like it has helped you out and want to support the team you can help us by donating or backing us on Patreon. Any amount would help support and continue development on this project and is greatly appreciated. </div>
				<div className="col s12 m6 l4 task"> We hope you have enjoyed using Materialize and if you feel like it has helped you out and want to support the team you can help us by donating or backing us on Patreon. Any amount would help support and continue development on this project and is greatly appreciated. </div>
				<div className="col s12 m6 l4 task"> We hope you have enjoyed using Materialize and if you feel like it has helped you out and want to support the team you can help us by donating or backing us on Patreon. Any amount would help support and continue development on this project and is greatly appreciated. </div>
				<div className="col s12 m6 l4 task"> We hope you have enjoyed using Materialize and if you feel like it has helped you out and want to support the team you can help us by donating or backing us on Patreon. Any amount would help support and continue development on this project and is greatly appreciated. </div>
				<div className="col s12 m6 l4 task"> We hope you have enjoyed using Materialize and if you feel like it has helped you out and want to support the team you can help us by donating or backing us on Patreon. Any amount would help support and continue development on this project and is greatly appreciated. </div>
			</div>
		)
	}
}

export default Tasks;