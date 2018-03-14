import React, {Component} from 'react';

import './Timer.css';

class Timer extends Component {
	render() {
		const {duration} = this.props;
		const {hour, minute} = duration;

		return (
			<div className="timer">
				<div className="timer-animation">
					<div className="clock">
						<p className="label center-align"> {hour}<sup style={{fontWeight: 200}}>{minute}</sup> </p>
					</div>
				</div>
				<div className="timer-actions">
					<a class="waves-effect waves-green btn-flat"> Start </a>
					<a class="waves-effect waves-orange btn-flat"> Pause </a>
					<a class="waves-effect waves-red btn-flat"> Reset </a>
				</div>
			</div>
		)
	}
}

export default Timer;