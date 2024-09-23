import { useEffect, useState } from "react"
import WorkoutCard from "../components/WorkoutCard"
import WorkoutForm from "../components/WorkoutForm"

const Workouts = () => {

    const [workouts, setWorkouts] = useState()
    const [createModal, setCreateModal] = useState(false)

    function renderCreateForm() {
        setCreateModal(!createModal)
    }

    function handleCreate(newWorkout) {
        setWorkouts(prev => [...prev, newWorkout])
    }

    useEffect(() => {
        fetch('/workout')
            .then(res => res.json())
            .then(data => setWorkouts(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <button onClick={renderCreateForm} data-modal-target="popup-modal" data-modal-toggle="popup-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Create new workout
            </button>
            <div className="grid grid-cols-3 gap-x-14 gap-y-4">
                {workouts && workouts.map((workout, index) => (
                    <WorkoutCard workout={workout} key={index} />
                ))}
            </div>
            {createModal && <WorkoutForm closeModal={renderCreateForm} handleCreate={handleCreate} />}
        </>
    )
}

export default Workouts
