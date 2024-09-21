const WorkoutCard = ({ workout, id }) => {

    const handleDelete = () => {
        fetch(`/workouts/${workout._id}`, {
            method: 'DELETE'
        })
            .then(() => console.log(`Delete ${workout._id}`)) 
            .catch(() => alert('Delete failed'))
    }

    return (
        <div key={id} className="w-full bg-white rounded-lg my-5 mx-auto p-5 relative shadow">
            <button onClick={handleDelete} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <img src={require('../img/delete.png')} className="w-4 h-4" alt="delete" />
            </button>

            <h4 className="mb-2.5 font-bold text-lg text-green-500">{workout.title}</h4>
            <p className="m-0 text-base text-gray-500">
                <strong>Reps: </strong>{workout.sets} x {workout.reps}
            </p>
            <p className="m-0 text-base text-gray-500"><strong>Equipments: </strong></p>
            <ul>
                {workout.equipments.map((equipment, index) => (
                    <li key={index} className="m-0 text-base text-gray-500">
                        {equipment.name} - {equipment.load}kg
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkoutCard
