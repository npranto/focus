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
		}
	}
}

export default defaultStore;