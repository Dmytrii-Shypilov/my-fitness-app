import s from './schedule.module.css'

const Schedule = () => {
    return (
        <div className={s.section}>
            <h3>Schedule</h3>
            <p>Monday</p>
            <div>
                <span>Bench Press</span><span>80kg</span>
                <span>4 sets</span><span>10 reps</span>
            </div>
        </div>
    )
}

export default Schedule