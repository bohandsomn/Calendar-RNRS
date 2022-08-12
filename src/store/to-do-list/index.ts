import { Action } from '../data-flow/interface'
import ToDoListAPI from './api'
import { Response } from './api/req-res'
import IToDoList, { IToDo } from './dto'
import TYPE from './saga/type'

const getOne = {
    success: (payload: IToDoList | null): Action<typeof payload> => ({
        type: TYPE.GET_ONE_SUCCESS,
        payload
    }),
    pending: (payload: Parameters<typeof ToDoListAPI.getOne>[0]): Action<typeof payload> => ({
        type: TYPE.GET_ONE_PENDING,
        payload
    }),
    failed: (payload = 'To do get one failed'): Action<typeof payload> => ({
        type: TYPE.GET_ONE_FAILED,
        payload
    }),
}

const create = {
    success: (payload: IToDo): Action<typeof payload> => ({
        type: TYPE.CREATE_SUCCESS,
        payload
    }),
    pending: (payload: Parameters<typeof ToDoListAPI.create>[0]): Action<typeof payload> => ({
        type: TYPE.CREATE_PENDING,
        payload
    }),
    failed: (payload = 'To do create failed'): Action<typeof payload> => ({
        type: TYPE.CREATE_FAILED,
        payload
    }),
}

const _delete = {
    success: (payload: Response['delete']): Action<typeof payload> => ({
        type: TYPE.DELETE_SUCCESS,
        payload
    }),
    pending: (payload: Parameters<typeof ToDoListAPI.delete>[0]): Action<typeof payload> => ({
        type: TYPE.DELETE_PENDING,
        payload
    }),
    failed: (payload = 'To do delete failed'): Action<typeof payload> => ({
        type: TYPE.DELETE_FAILED,
        payload
    }),
}

const actions = {
    getOne,
    create,
    delete: _delete
}

export default actions
