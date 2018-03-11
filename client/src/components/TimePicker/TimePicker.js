import React, {Component} from 'react';
import cloneDeep from 'lodash.clonedeep';
import PropTypes from 'prop-types';

import './TimePicker.css';

class TimePicker extends Component {

	constructor(props) {
		super(props);

		this.state = {
			hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			minutes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
			hourSelected: this.props.defaultTime ? cloneDeep(this.props.defaultTime).hour : this.formatHour(new Date().getHours()),
			minuteSelected: this.props.defaultTime ? cloneDeep(this.props.defaultTime).minute : new Date().getMinutes(),
			periodSelected: this.props.defaultTime ? cloneDeep(this.props.defaultTime).period : (new Date().getHours() > 12) ? 'PM' : 'AM'
		}

		this.togglePeriod = this.togglePeriod.bind(this);
	}

	formatHour(hour) {
		return (hour > 12)
			? hour - 12
			: hour; 
	}

	onHourChange(hourValue) {
		this.setState({
			...this.state, 
			hourSelected: hourValue
		}, () => {
			this.props.onTimeSelected({
				hour: this.state.hourSelected,
				minute: this.state.minuteSelected,
				period: this.state.periodSelected
			});
		});
		
	}

	onMinuteChange(minuteValue) {
		this.setState({
			...this.state, 
			minuteSelected: minuteValue
		}, () => {
			this.props.onTimeSelected({
				hour: this.state.hourSelected,
				minute: this.state.minuteSelected,
				period: this.state.periodSelected
			});
		});
		
	}

	togglePeriod() {
		console.log(this.state);
		if (this.state.periodSelected === 'PM') {
			this.setState({
				...this.state,
				periodSelected: 'AM'
			}, () => {
				this.props.onTimeSelected({
					hour: this.state.hourSelected,
					minute: this.state.minuteSelected,
					period: this.state.periodSelected
				});
			});
		} else {
			this.setState({
				...this.state,
				periodSelected: 'PM'
			}, () => {
				this.props.onTimeSelected({
					hour: this.state.hourSelected,
					minute: this.state.minuteSelected,
					period: this.state.periodSelected
				});
			});
		}

	}

	renderHourInputs(hours) {
		return hours.map((hour, index) => {
			return (
				<option key={index} value={hour}> {(hour < 10) ? `0${hour}` : hour} </option>
			)
		})
	}

	renderMinuteInputs(minutes) {
		return minutes.map((minute, index) => {
			return (
				<option key={index} value={minute} > {(minute < 10) ? `0${minute}` : minute} </option>
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
					    	value={this.state.hourSelected} 
					    	className="browser-default"
							onChange={e => this.onHourChange(parseInt(e.target.value))}>
							{
								this.renderHourInputs(this.state.hours)
							}
					    </select>
					</div>
					<p className="separator"> : </p>
					<div className="minute-input">
					    <select 
					    	value={this.state.minuteSelected} 
					    	className="browser-default" 
					    	onChange={e => this.onMinuteChange(parseInt(e.target.value))}>
							{
								this.renderMinuteInputs(this.state.minutes)
							}
					    </select>
					</div>
					<div className="period-toggler">
						<a onClick={() => this.togglePeriod()}> {this.state.periodSelected} </a>
					</div>
				</div>
			</div>
		)
	}
}

TimePicker.propTypes = {
	defaultTime: PropTypes.shape({
	    hour: PropTypes.number.isRequired,
	    minute: PropTypes.number.isRequired,
	    period: PropTypes.string.isRequired
	}),
}

export default TimePicker;