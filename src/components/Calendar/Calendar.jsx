import s from './calendar.module.scss'


const Calendar = () => {
    const today = new Date()
    console.dir(today.getDate())
    return (
        <div className={s.calendarBody}>
            <div className={s.headRow} id="head">
                <div className={s.headColumn} id="c1">Monday</div>
                <div className={s.headColumn} id="c2">Tuesday</div>
                <div className={s.headColumn} id="c3">Wednesday</div>
                <div className={s.headColumn} id="c4">Thursday</div>
                <div className={s.headColumn} id="c5">Friday</div>
                <div className={s.headColumn} id="c6">Saturday</div>
                <div className={s.headColumn} id="c7">Sunday</div>
            </div>
            <div className={s.row} id="r1">
                <div className={s.column} id="c1"><div className={s.day}>1</div></div>
                <div className={s.column} id="c2"><div className={s.day}>2</div></div>
                <div className={s.column} id="c3"><div className={s.day}>3</div></div>
                <div className={s.column} id="c4"><div className={s.day}>4</div></div>
                <div className={s.column} id="c5"><div className={s.day}>5</div></div>
                <div className={s.column} id="c6"><div className={s.day}>6</div></div>
                <div className={s.column} id="c7"><div className={s.day}>7</div></div>
            </div>
            <div className={s.row} id="r2">
                <div className={s.column} id="c1"><div className={s.day}>8</div></div>
                <div className={s.column} id="c2"><div className={s.day}>9</div></div>
                <div className={s.column} id="c3"><div className={s.day}>10</div></div>
                <div className={s.column} id="c4"><div className={s.day}>11</div></div>
                <div className={s.column} id="c5"><div className={s.day}>12</div></div>
                <div className={s.column} id="c6"><div className={s.day}>13</div></div>
                <div className={s.column} id="c7"><div className={s.day}>14</div></div>
            </div>
        </div>
    )
}

export default Calendar