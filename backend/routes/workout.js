const express = require('express') 
const router = express.Router() 

const workoutController = require('../controllers/WorkoutController')

router.get(`/:id`, workoutController.showOne)
router.delete(`/:id`, workoutController.delete)
router.put(`/:id`, workoutController.update)
router.get(`/`, workoutController.show)
router.post(`/`, workoutController.create)


module.exports = router 
