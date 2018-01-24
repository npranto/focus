const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const taskRoutes = require('./taskRoutes');

const routes = (app) => {
	app.use('/auth', authRoutes);
	app.use('/api/users', userRoutes);
	app.use('/api/reviews', reviewRoutes);
	app.use('/api/tasks', taskRoutes);
}

module.exports = routes;