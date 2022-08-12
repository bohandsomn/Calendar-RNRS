import { Action, State } from '../../data-flow/interface'
import IProfileDTO from '../dto'
import TYPE from './type'

const initialState = {
    data: null,
    isLoading: true,
    error: null
} as State<IProfileDTO>

const profile = (state = initialState, action: Action<IProfileDTO | string>): typeof state => {
    switch (action.type) {
        case TYPE.LOGIN_SUCCESS:
            return {
                data: action.payload as IProfileDTO,
                isLoading: false,
                error: null
            }
    
        case TYPE.LOGIN_PENDING:
            return {
                data: null,
                isLoading: true,
                error: null
            }

        case TYPE.LOGIN_FAILED:
            return {
                data: null,
                isLoading: false,
                error: action.payload as string
            }

        case TYPE.REGISTER_SUCCESS:
            return {
                data: action.payload as IProfileDTO,
                isLoading: false,
                error: null
            }
    
        case TYPE.REGISTER_PENDING:
            return {
                data: null,
                isLoading: true,
                error: null
            }
    
        case TYPE.REGISTER_FAILED:
            return {
                data: null,
                isLoading: false,
                error: action.payload as string
            }

        case TYPE.SIGN_OUT:
            return {
                data: null,
                isLoading: true,
                error: null
            }

        default:
            return state
    }
}

export default profile
