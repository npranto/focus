import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import $ from 'jquery';
import MdAccessTime from 'react-icons/lib/md/access-time';
import cloneDeep from 'lodash.clonedeep';

import TimePicker from './../TimePicker/TimePicker';
import * as actionCreators from './../../actions';
import './CreateTask.css';

class CreateTask extends Component {

	constructor(props) {
		super(props);

		$(document).ready(function(){
		    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	    	$('#createNewTaskModal').modal();
    		$('select').material_select();
	    	$('.timepicker').pickatime({
			    default: 'now', // Set default time: 'now', '1:30AM', '16:30'
			    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
			    twelvehour: true, // Use AM/PM or 24-hour format
			    donetext: 'OK', // text for done-button
			    cleartext: 'Clear', // text for clear-button
			    canceltext: 'Cancel', // Text for cancel-button
			    autoclose: false, // automatic close timepicker
			    ampmclickable: true, // make AM PM clickable
			    aftershow: function() {
			    	console.log('dfgfdgg');
			    } //Function for after opening timepicker
			});	
		});
		
	}

	onLevelOfImportanceSelected(value, levelOfImportance) {
		this.props.updateLevelOfImportance(value, levelOfImportance);
	}

	onStartTimeChange(time) {
		this.props.updateStartTime(time);
	}

	onDurationHourChange(value, hours) {
		this.props.updateDurationHour(value, hours);
	}

	onDurationMinuteChange(value, minutes) {
		this.props.updateDurationMinute(value, minutes);
	}

	onCreateNewTaskFormSubmit() {
		const {currentUser} = this.props.auth;
		const {title, description} = this.props.form.createNewTaskForm.values;
		const {selectedLevelOfImportance, duration, startTime} = this.props.components.createTask;
		let newTask = {};
		if (title) {
			newTask['title'] = title;
		}
		if (description) {
			newTask['description'] = description;
		}
		if (selectedLevelOfImportance && (selectedLevelOfImportance.value !== 0)) {
			newTask['levelOfImportance'] = cloneDeep(selectedLevelOfImportance);
		}
		if (duration && (duration.hour.hourSelected !== 0) && (duration.minute.minuteSelected !== 0)) {
			newTask['duration'] = {
				hour: duration.hour.hourSelected,
				minute: duration.minute.minuteSelected
			}
		}
		if (startTime) {
			newTask['startTime'] = cloneDeep(startTime);
		}
		newTask['createdBy'] = currentUser._id;
		this.props.createNewTask(newTask);
	}

	renderLevelOfImportanceOptions(levelOfImportance) {
		return (
			levelOfImportance.map((level, index) => {
				return (level.value === 0) 
					? <option key={index} value={level.value} disabled > {level.label} </option>
					: <option key={index} value={level.value}> {level.label} </option>
			})
		)
	}

	renderDurationHourOptions(hours) {
		return (
			hours.map((hour, index) => {
				return <option key={index} value={hour} > {hour} </option>
			})
		)
	}

	renderDurationMinuteOptions(minutes) {
		return (
			minutes.map((minute, index) => {
				return <option key={index} value={minute} > {minute} </option>
			})
		)
	}

	render() {
		const {levelOfImportance, selectedLevelOfImportance, duration, startTime} = this.props.components.createTask;
		const {invalid, pristine, submitting} = this.props;

		return (
			<div id="createNewTaskModal" className="modal modal-fixed-footer">
			    {/* Create New Task Modal */}
			    <div className="modal-content">
				    <div className="create-task">
						<h5 className="center-align create-new-task-title"> Create New Task </h5>
						<div className="create-new-task-form-container row">
						    <form className="create-new-task-form col s12 m12 l12">
						    	<div className="row">
						    		<Field
							            name="title"
							    		id="title"
							            component={InputField}
							            type="text"
							            htmlFor="title"
							            label="Title"
						          	/>
						          	<Field
							            name="description"
							    		id="description"
							            component={TextareaField}
							            type="text"
							            htmlFor="description"
							            label="Description"
						          	/>
						        </div>
						        <div className="row">
						        	<div className="col s12 m12 l12">
							        	<label> Level of Importance </label>
									    <select 
									    	value={selectedLevelOfImportance.value} 
									    	className="browser-default" 
									    	onChange={(e) => this.onLevelOfImportanceSelected(e.target.value, levelOfImportance)}>
											{
												this.renderLevelOfImportanceOptions(levelOfImportance)
											}
									    </select>
									</div>
								</div>
								<div className="row">
									<div className="col s12 m6 l6">
								        <TimePicker defaultTime={startTime} onTimeSelected={(time) => this.onStartTimeChange(time)}/>
							        </div>
						   			<div className="col s6 m3 l3">
							        	<label> Duration (hours) </label>
									    <select 
									    	value={duration.hour.hourSelected} 
									    	className="browser-default" 
									    	onChange={(e) => this.onDurationHourChange(e.target.value, duration.hour.hours)}>
											{
												this.renderDurationHourOptions(duration.hour.hours)
											}
									    </select>
									</div>
									<div className="col s6 m3 l3">
							        	<label> Duration (minutes) </label>
									    <select 
									    	value={duration.minute.minuteSelected} 
									    	className="browser-default" 
									    	onChange={(e) => this.onDurationMinuteChange(e.target.value, duration.minute.minutes)}>
											{
												this.renderDurationHourOptions(duration.minute.minutes)
											}
									    </select>
									</div>
								</div>
						    </form>
						</div>
					</div>
			    </div>
			    <div className="modal-footer">
			    	<a onClick={() => this.onCreateNewTaskFormSubmit()} disabled={invalid || pristine || submitting} className="modal-action modal-close waves-effect green darken-2 btn"> Create </a>
			   		<a className="modal-action modal-close waves-effect waves-green btn-flat"> Cancel </a>
			    </div>
			</div>
		)
	}
}

const InputField = (props) => {
	const {input, name, id, type, htmlFor, label} = props;
	const {touched, error} = props.meta;
	return (
		<div className="input-field col s12 m12 l12">
          <input 
          	{...input}
          	name={name}
          	id={id} 
          	type={type} />
          <label htmlFor={htmlFor}> {label} </label>
          <p className="validation-message right-align red-text">
			<sub className="red-text"> {(touched && error) ? error : ''} </sub>
		  </p>
        </div>
	)
}

const TextareaField = (props) => {
	const {input, name, id, type, htmlFor, label} = props;
	const {touched, error} = props.meta;
	return (
		<div className="input-field col s12 m12 l12">
	      <textarea 
	      	{...input}
	      	name={name}
	      	id={id} 
	      	type={type} 
	      	className="materialize-textarea">
	      </textarea>
	      <label htmlFor={htmlFor}> {label} </label>
	      <p className="validation-message right-align">
			<sub className="red-text"> {(touched && error) ? error : ''} </sub>
		  </p>
	    </div>
	)
	
}

const validate = (form) => {
	let errors = {};

	if (!form.title) {
		errors.title = 'Required!';
	} else if (form.title.length > 150) {
		errors.title = 'Must be less than 150 characters'
	} 

	if (form.description && form.description.length > 500) {
		errors.description = 'Must be less than 500 characters'
	} 

	return errors;
}


const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		form: state.form,
		components: state.components
	}
}



export default reduxForm({
	form: 'createNewTaskForm',
	validate
})(connect(mapStateToProps, actionCreators)(CreateTask));

