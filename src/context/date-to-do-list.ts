import React from 'react'

import type { DataType } from '../utils/time-converter'

type IDateToDoList = {
    date: DataType['date'] | null
    setDate: React.Dispatch<React.SetStateAction<DataType['date'] | null>>
}

const DATE_TO_DO_LIST = React.createContext<IDateToDoList>(undefined!)

export default DATE_TO_DO_LIST
