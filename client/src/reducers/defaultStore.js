export default const defaultStore = {
	components: {
		navigationBar: {
			tabs: {
				notAuthenticatedTabs: [
					{
						name: 'Feature',
						link: '/#features'
					},
					{
						name: 'Reviews',
						link: '/#reviews'
					},
					{
						name: 'Get started',
						link: '/sign-in',
						isLinkToComponent: true,
						isButton: true,
						customClass: 'green-text'
					}
				],
				authenticatedTabs: [
					{
						name: 'Dashboard',
						link: '/users/:userId/dashboard'
					},
					{
						name: 'Settings',
						link: '/users/:userId/settings'
					},
					{
						name: 'Give Feedback',
						link: '/users/:userId/give-feedback'
					},
					{
						name: 'Logout'
					}
				]
			}
		}
	}
}