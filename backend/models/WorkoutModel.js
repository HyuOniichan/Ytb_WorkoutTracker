const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutEquipmentSchema = new Schema({
    name: { type: String },
    load: { type: Number }
})

const workoutSchema = new Schema({
    title: { type: String, required: true },
    sets: { type: Number },
    reps: { type: Number },
    rest: { type: Number },
    equipments: { type: [workoutEquipmentSchema], default: undefined },
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)
