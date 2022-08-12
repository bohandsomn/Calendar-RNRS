import { DataType } from "../../utils/time-converter"

type IToDoList = Partial<Record<DataType['date'], IToDo[]>> 

export type IToDo = {
    id: number | string
    userId: number | string
    date: DataType['date']
    header: string
    content: string
}

export type IToDoListServer = IToDo[] 

export default IToDoList
