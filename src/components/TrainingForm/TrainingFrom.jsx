import s from './training-form.module.scss'
import { useState } from 'react'
import { exerciseData } from 'database/exercises'


const initialState = {
    name: null,
    resistance: null,
    sets: null,
    reps: null,

}

const TrainingForm = () => {

    const [exercise, setExercise ] = useState(initialState)

    return (
        <div>
            <form action="">
                <label htmlFor="">Exercise</label>
                <input type="text" />
            </form>
        </div>
    )
}

export default TrainingForm