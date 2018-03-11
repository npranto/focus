import React, {Component} from 'react';

import './TimePicker.css';

class TimePicker extends Component {

	constructor(props) {
		super(props);

		this.state = {
			hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			minutes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
			hourSelected: formatHour(new Date().getHours()),
			minuteSelected: new Date().getMinutes()
		}
	}

	formatHour(hour) {
		return (hour > 12)
			? hour - 12
			: hour; 
	}

	renderHourInputs(hours) {
		return hours.map((hour, index) => {
			return (
				<option key={index} value={hour} > {hour} </option>
			)
		})
	}

	renderMinuteInputs(minutes) {
		return minutes.map((minute, index) => {
			return (
				<option key={index} value={minute} > {minute} </option>
			)
		})
	}

	render() {
		return (
			<div className="time-picker">
				<label> Start Time </label>
				<div className="hour-minute-inputs">
					<div className="hour-input">
					    <select 
					    	value={} 
					    	className="browser-default">
							{
								this.renderHourInputs(this.state.hours)
							}
					    </select>
					</div>
					<p className="separator"> : </p>
					<div className="minute-input">
					    <select 
					    	value={minute} 
					    	className="browser-default" >
							{
								this.renderMinuteInputs(this.state.minutes)
							}
					    </select>
					</div>
					<div className="period-toggler">
						<a> {period} </a>
					</div>
				</div>
			</div>
		)
	}
}

export default TimePicker;