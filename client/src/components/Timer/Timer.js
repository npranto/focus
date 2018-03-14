import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Timer.css';

class Timer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			timer: null,
			hourLeft: this.props.duration.hour,
			minuteLeft: this.props.duration.minute,
			secondLeft: this.props.duration && this.props.duration.second ? this.props.duration.hour: 0,
			counter: this.secondLeft + (this.minuteLeft * 60) + (this.hourLeft * 60 * 60)
		}
	}

	componentDidMount() {
		this.setState((prevState) => {
			let minuteToSeconds = prevState.minuteLeft * 60;
			let hourToSeconds = prevState.hourLeft * 60 * 60;
			return {
				counter: prevState.secondLeft + minuteToSeconds + hourToSeconds
			}
		})
	}

	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	startTimer() {
		let timer = setInterval(() => {
			this.tick();
		}, 500)
		this.setState({
			timer: timer
		});
	}

	tick() {
		this.setState((prevState) => {
			let newCounter = prevState.counter - 1;
			let newHourLeft = Math.floor(newCounter / (60 * 60));
			let newMinuteLeft = (Math.floor(newCounter / 60)) - (newHourLeft * 60);
			let newSecondLeft = Math.floor(((newCounter / 60) - Math.floor(newCounter / 60)) * 60);
			return {
				hourLeft: newHourLeft,
				minuteLeft: newMinuteLeft,
				secondLeft: newSecondLeft,
				counter: newCounter
			}
		})
	}

	formatHour(hour) {
		return (hour < 10) ? `0${hour}` : `${hour}`;
	}

	formatMinute(minute) {
		return (minute < 10) ? `0${minute}` : `${minute}`;
	}

	formatSecond(second) {
		return (second < 10) ? `0${second}` : `${second}`;
	}

	render() {
		return (
			<div className="timer">
				<div className="timer-animation">
					<div className="clock">
						<p className="second-label center-align"> {this.formatSecond(this.state.secondLeft)} </p>
						<p className="hour-minute-label center-align"> {this.formatHour(this.state.hourLeft)}:{this.formatMinute(this.state.minuteLeft)} </p>
					</div>
				</div>
				<div className="timer-actions">
					<a onClick={() => this.startTimer()} className="waves-effect waves-green btn-flat"> Start </a>
					<a className="waves-effect waves-orange btn-flat"> Pause </a>
					<a className="waves-effect waves-red btn-flat"> Reset </a>
				</div>
			</div>
		)
	}
}

Timer.propTypes = {
	duration: PropTypes.shape({
		hour: PropTypes.number.isRequired,
		minute: PropTypes.number.isRequired,
		second: PropTypes.number,
	})
}

export default Timer;