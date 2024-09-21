const express = require('express') 
const router = express.Router() 

const workoutController = require('../controllers/WorkoutController')

router.get(`/`, workoutController.show)
router.get(`/:id`, workoutController.showOne)
router.post(`/`, workoutController.create)
router.delete(`/:id`, workoutController.delete)
router.put(`/:id`, workoutController.update)


module.exports = router 
