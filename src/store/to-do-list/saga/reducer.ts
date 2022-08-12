import { Action, State } from '../../data-flow/interface'
import { Response } from '../api/req-res'
import IToDoList, { IToDo } from '../dto'
import TYPE from './type'

const initialState = {
    data: null,
    isLoading: true,
    error: null
} as State<IToDoList>

const toDoList = (state = initialState, action: Action<IToDoList | Response['delete'] | IToDo | null | string>): typeof state => {
    switch (action.type) {
        case TYPE.GET_ONE_SUCCESS:
            return {
                data: {
                    ...state.data,
                    ...action.payload as IToDoList | null
                },
                isLoading: false,
                error: null
            }
    
        case TYPE.GET_ONE_PENDING:
            return {
                data: state.data,
                isLoading: true,
                error: null
            }

        case TYPE.GET_ONE_FAILED:
            return {
                data: state.data,
                isLoading: false,
                error: action.payload as string
            }

        case TYPE.CREATE_SUCCESS:
            return {
                data: {
                    ...state.data,
                    [(action.payload as IToDo).date]: [
                        ...state.data?.list!,
                        action.payload as IToDo
                    ]
                },
                isLoading: false,
                error: null
            }
    
        case TYPE.CREATE_PENDING:
            return {
                data: state.data,
                isLoading: true,
                error: null
            }
    
        case TYPE.CREATE_FAILED:
            return {
                data: state.data,
                isLoading: false,
                error: action.payload as string
            }

        case TYPE.DELETE_SUCCESS:
            return {
                data: {
                    ...state.data,
                    [(action.payload as Response['delete']).date]: state.data?.[(action.payload as Response['delete']).date]?.filter((toDo) => toDo.id !== (action.payload as Response['delete']).id)
                },
                isLoading: false,
                error: null
            }
    
        case TYPE.DELETE_PENDING:
            return {
                data: state.data,
                isLoading: true,
                error: null
            }
    
        case TYPE.DELETE_FAILED:
            return {
                data: state.data,
                isLoading: false,
                error: action.payload as string
            }

        default:
            return state
    }
}

export default toDoList
