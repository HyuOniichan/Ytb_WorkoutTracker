const Workout = require('../models/WorkoutModel')

class WorkoutController {

    // [GET] /workout
    show(req, res, next) {
        Workout.find({})
            .then(data => res.json(data))
            .catch(next)
    }

    // [GET] /workout/:id 
    showOne(req, res, next) {
        Workout.findById(req.params.id)
            .then(data => res.json(data))
            .catch(next)
    }

    // [POST]
    create(req, res, next) {
        Workout.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    }

    // [DELETE]
    delete(req, res, next) {
        console.log('req.params.id: ', typeof req.params.id);
        Workout.findByIdAndDelete(req.params.id) 
            .then(() => res.json({ done: 'ok' }))
            .catch(next)
    }

    // [PUT]
    update(req, res, next) {
        Workout.findOneAndUpdate({_id: req.params.id}, req.body) 
            .then(() => res.json({ done: 'ok' }))
            .catch(next) 
    }

}

module.exports = new WorkoutController() 
