import React, { Component } from 'react';

import Feature from './Feature/Feature';
import './Features.css';

class Features extends Component {

	renderFeatures(features) {
		return features.map((feature, index) => {
			return <Feature key={index} index={index} feature={feature} />
		})
	}

	render() {
		const features = [
			{
				photo: {
					alt: 'Photo of Colorful List of Tasks or Events',
					src: 'https://staticinstapaper.s3.amazonaws.com/img/landing_save_anything.png?v=8181b053234850ae1232d0b404fddf6b'
				},
				description: 'Provides a less cluttered list of tasks and events',
			},
			{
				photo: {
					alt: 'Photo of Overall Layout of the Focus',
					src: 'https://staticinstapaper.s3.amazonaws.com/img/landing_read_anywhere.png?v=768145e3b693a3de945596b78fa70a72'
				},
				description: 'Introduces simple, playful design layout to encourage daily workers to dive into their busy day with ease'
			},
			{
				photo: {
					alt: 'Photo of a Desktop Notification Reminder for a Task',
					src: 'https://staticinstapaper.s3.amazonaws.com/img/landing_notes.png?v=5fd47b0d424963aa2ba66fee203aa476'
				},
				description: 'Great for managing work on time with kind notication reminders'
			},
			{
				photo: {
					alt: 'Photo of a Doughnut Chart, Featuring Progress of Task Completion',
					src: 'https://staticinstapaper.s3.amazonaws.com/img/landing_save_anything.png?v=8181b053234850ae1232d0b404fddf6b'
				},
				description: 'Gives you a better task completion experience to make you feel more accomplished'
			},
			{
				photo: {
					alt: 'Photo of time countdown for a Task',
					src: 'https://staticinstapaper.s3.amazonaws.com/img/landing_read_anywhere.png?v=768145e3b693a3de945596b78fa70a72'
				},
				description: 'Helps you to stay up on your task until completion with friendly time countdowns'
			},
			{
				photo: {
					alt: 'Photo of View Modes Toggle Buttons',
					src: 'https://staticinstapaper.s3.amazonaws.com/img/landing_save_anything.png?v=8181b053234850ae1232d0b404fddf6b'
				},
				description: 'Visualize your work in different modes, including calender and priorotize view modes to better approach your work'
			}
		]

		return (
			<div className="features-component container">
				{
					this.renderFeatures(features)
				}
			</div>
		)
	}
}

export default Features;