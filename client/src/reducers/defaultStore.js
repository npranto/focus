const defaultStore = {
	components: {
		navigationBar: {
			tabs: {
				notAuthenticatedTabs: [
					{
						name: 'Feature'
					},
					{
						name: 'Reviews'
					},
					{
						name: 'Get started'
					}
				],
				authenticatedTabs: [
					{
						name: 'Dashboard'
					},
					{
						name: 'Settings'
					},
					{
						name: 'Give Feedback'
					},
					{
						name: 'Logout'
					}
				]
			}
		},
		landing: {
			features: [
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
			],
			reviews: []
		},
		signInForm: {
			inputFields: [
				{
					name: "email",
					placeholder: "",
					id: "email",
					type: "email",
					htmlFor: "email",
					label: "Email"
				},
				{
					name: "password",
					placeholder: "",
					id: "password",
					type: "password",
					htmlFor: "password",
					label: "Password"
				}
			],
			signInError: null
		},
		signUpForm: {
			inputFields: [
				{
					name: "firstName",
					placeholder: "",
					id: "first_name",
					type: "text",
					htmlFor: "first_name",
					label: "First Name"
				},
				{
					name: "lastName",
					placeholder: "",
					id: "last_name",
					type: "text",
					htmlFor: "last_name",
					label: "Last Name"
				},
				{
					name: "email",
					placeholder: "",
					id: "email",
					type: "email",
					htmlFor: "email",
					label: "Email"
				},
				{
					name: "password",
					placeholder: "",
					id: "password",
					type: "password",
					htmlFor: "password",
					label: "Password"
				},
				{
					name: "confirmPassword",
					placeholder: "",
					id: "confirm_password",
					type: "password",
					htmlFor: "confirm_password",
					label: "Confirm Password"
				},
			],
			profilePicture: null,
			profilePictureUploadError: null,
			signUpError: null
		},
		dashboard: {
			tasks: [],
			editingTask: {
				selectedTaskForEdit: null,
				levelOfImportance: [
					{	
						label: 'Choose your option',
						value: 0
					},
					{
						label: 'Important, Urgent',
						value: 1
					},
					{
						label: 'Important, Not Urgent',
						value: 2
					},
					{
						label: 'Not Important, Urgent',
						value: 3
					},
					{
						label: 'Not Important, Not Urgent',
						value: 4
					}
				],
				selectedLevelOfImportance: {	
					label: 'Choose your option',
					value: 0
				},
				duration: {
					hour: {
						hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						hourSelected: 0
					},
					minute: {
						minutes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
						minuteSelected: 0
					}
				},
				startTime: null
			},
			currentTask: null
		},
		taskBoard: {
			viewModes: [
				{
					id: 'tasks',
					title: 'Tasks',
					active: true
				},
				{
					id: 'calendar',
					title: 'Calendar',
					active: false
				},
				{
					id: 'prioritize-mode',
					title: 'Prioritize Mode',
					active: false
				}
			]
		},
		createTask: {
			levelOfImportance: [
				{	
					label: 'Choose your option',
					value: 0
				},
				{
					label: 'Important, Urgent',
					value: 1
				},
				{
					label: 'Important, Not Urgent',
					value: 2
				},
				{
					label: 'Not Important, Urgent',
					value: 3
				},
				{
					label: 'Not Important, Not Urgent',
					value: 4
				}
			],
			selectedLevelOfImportance: {	
				label: 'Choose your option',
				value: 0
			},
			duration: {
				hour: {
					hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
					hourSelected: 0
				},
				minute: {
					minutes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
					minuteSelected: 0
				}
			},
			startTime: null
		},
		forgetPassword: {
			retrivePassword: {
				step: 'retrivePassword',
				show: true,
				done: false,
				active: true,
				nextStep: 'verifyCode'
			},
			verifyCode: {
				step: 'verifyCode',
				show: false,
				done: false,
				active: false,
				nextStep: 'updateNewPassword'
			},
			updateNewPassword: {
				step: 'updateNewPassword',
				show: false,
				done: false,
				active: false,
				nextStep: 'letsSignIn'
			},
			letsSignIn: {
				step: 'letsSignIn',
				show: false,
				done: false,
				active: false,
				nextStep: null
			},
			resettingPasswordForUserId: null
		},
		giveFeedback: {
			scale: [
				{ rate: 1, description: 'Not my thing', 	hoveringOver: false },
				{ rate: 2, description: 'Could be better', 	hoveringOver: false },
				{ rate: 3, description: 'It\'s okay', 		hoveringOver: false },
				{ rate: 4, description: 'Like it!', 		hoveringOver: false },
				{ rate: 5, description: 'Love it!',			hoveringOver: false } 
			],
			chosenRating: null
		}
	}
}

export default defaultStore;