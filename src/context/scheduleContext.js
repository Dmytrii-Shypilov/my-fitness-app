import { createContext } from "react"
import { useState } from "react"

export const scheduleContext = createContext([])

const scheduleContext = ({children}) => {
    const [schedule, setSchedule] = useState([])

    return (
        <scheduleContext.Provider>
            {children}
        </scheduleContext.Provider>
    )
}

export default scheduleContext