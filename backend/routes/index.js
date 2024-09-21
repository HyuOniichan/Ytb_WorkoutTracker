const WorkoutRouter = require('./workout')


function route(app) {
    app.use('/workout', WorkoutRouter)

}

module.exports = route
