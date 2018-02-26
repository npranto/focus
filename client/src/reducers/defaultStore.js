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
						isButton: true
					}
				],
				authenticatedTabs: [
					{
						name: 'Dashboard',
						link: '#'
					},
				]
			}
		}
	}
}