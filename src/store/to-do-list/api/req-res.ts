import { DataType } from '../../../utils/time-converter'
import { IToDoListServer, IToDo } from '../dto'

export type Request = {
    create: IToDo
    getOne: {
        date: DataType['date']
        userId: number | string
    }
    delete: {
        date: DataType['date']
        id: string | number
    }
}

export type Response = {
    getOne: IToDoListServer
    create: IToDo
    delete: {
        date: DataType['date']
        id: string | number
    }
}
