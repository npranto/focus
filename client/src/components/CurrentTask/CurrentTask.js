import React, {Component} from 'react';
import $ from 'jquery';
import Media from 'react-media';
import MdInfoOutline from 'react-icons/lib/md/info-outline';

import Timer from './../Timer/Timer';
import './CurrentTask.css';

class CurrentTask extends Component {

	constructor(props) {
		super(props);

		$(document).ready(function(){
		    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	    	$('#currentTaskModal').modal();
		});
	}

	render() {
		return (
			<div id="currentTaskModal" className="current-task modal bottom-sheet">
				<div className="modal-content">
					<div className="task-and-timer">
						<Media query={{minWidth: 400}}>
							{matches => 
								matches 
									? (
										<div className="task" style={{width: '60%'}}>
											<h4> Title  sfsfdfgdfgdfg dg dfgdfdfd gdfg df gdfgd fdfgdf g g dfg df gdfg  By default, LocalStrategy expects to find credentials in parameters named username and password. If your site prefers to name these fields differently, options are available to change the defaults.</h4>
											<p> Description dfg df gdfd d d gdf d fd df fd gdfg gg dfdfg f gdffddf gdff By default, LocalStrategy expects to find credentials in parameters named username and password. If your site prefers to name these fields differently, options are available to change the defaults. </p>
											<p className="level-of-importance"> <MdInfoOutline size={16} /> Important, Urgent </p>
										</div>
									)
									: (
										<div className="task" style={{width: '100%'}}>
											<h4> Title By default, LocalStrategy expects to find credentials in parameters named username and password. If your site prefers to name these fields differently, options are available to change the defaults.  </h4>
											<p> Description By default, LocalStrategy expects to find credentials in parameters named username and password. If your site prefers to name these fields differently, options are available to change the defaults. By default, LocalStrategy expects to find credentials in parameters named username and password. If your site prefers to name these fields differently, options are available to change the defaults. </p>
											<p className="level-of-importance right-align"> 
												
												Important, Urgent 
											</p>
										</div>
									)
							}
						</Media>
						<Media query={{minWidth: 400}}>
							{matches => 
								matches 
									? (
										<div className="timer-container">
											<Timer duration={{hour: 1, minute: 45}}/>
										</div>
									)
									: ""
							}
						</Media>
					</div>
				</div>
				<div className="modal-footer">
					<a href="#!" className="done modal-action modal-close waves-effect waves-light green darken-3 btn"> Done </a>
					<a href="#!" className="cancel modal-action modal-close btn-flat "> Cancel </a>
				</div>
			</div>
		)
	}
}

export default CurrentTask;