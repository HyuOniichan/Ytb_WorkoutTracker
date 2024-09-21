import { useState } from 'react'

const WorkoutForm = ({ closeModal, handleCreate }) => {
    const [title, setTitle] = useState('') 
    const [sets, setSets] = useState('') 
    const [reps, setReps] = useState('') 
    const [rest, setRest] = useState('') 
    const [equipment, setEquipment] = useState('') 
    const [load, setLoad] = useState('') 

    const handleSubmit = () => {
        if (!title || !sets || !reps || !rest) {
            alert('Complete all required fields please') 
            return 
        } 
        const workout = {
            title: title, 
            sets: sets, 
            reps: reps, 
            rest: rest, 
            equipments: [
                {
                    name: equipment, 
                    load: load 
                }
            ]
        }
        fetch('/workout', {
            method: 'POST', 
            body: JSON.stringify(workout), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => alert(`${title} created`)) 
            .catch(() => alert(`Create fail`))
        closeModal()
        handleCreate(workout)
    }

    return (
        <div id="popup-modal" tabIndex="-1" className="bg-black/20 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center align-center">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={closeModal} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <img src={require('../img/close.png')} className="w-4 h-4" alt="close" />
                        <span className="sr-only">Close modal</span>
                    </button>

                    <div className="p-4 md:p-5 text-center">
                        <h3 className="mb-5 text-xl font-normal text-gray-500 dark:text-gray-400">Create workout</h3>

                        <form className="max-w-sm mx-auto">
                            <div className="mb-2">
                                <label htmlFor="title" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Title</label>
                                <input onChange={e => setTitle(e.target.value)} value={title} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Push up" required />
                            </div>
                            <div className="grid grid-cols-3 gap-x-3 mb-3">
                                <div className="col-span-1">
                                    <label htmlFor="sets" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Sets</label>
                                    <input onChange={e => setSets(e.target.value)} value={sets} id="sets" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3" required />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="reps" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Reps</label>
                                    <input onChange={e => setReps(e.target.value)} value={reps} id="reps" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15" required />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="rest" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Rest</label>
                                    <input onChange={e => setRest(e.target.value)} value={rest} id="rest" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="sec." required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-3 mb-7">
                                <div className="col-span-1">
                                    <label htmlFor="equipment" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Equipment</label>
                                    <input onChange={e => setEquipment(e.target.value)} value={equipment} id="equipment" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dumbbell" />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="load" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Load</label>
                                    <input onChange={e => setLoad(e.target.value)} value={load} id="load" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kg" />
                                </div>
                            </div>
                        </form>

                        <button onClick={closeModal} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Cancel
                        </button>
                        <button onClick={handleSubmit} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ml-4">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutForm 
