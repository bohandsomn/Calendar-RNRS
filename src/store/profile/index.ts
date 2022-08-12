import { Action } from '../data-flow/interface'
import ProfileAPI from './api'
import IProfileDTO from './dto'
import TYPE from './saga/type'

const login = {
    success: (payload: IProfileDTO): Action<typeof payload> => ({
        type: TYPE.LOGIN_SUCCESS,
        payload
    }),
    pending: (payload: Parameters<typeof ProfileAPI.login>[0]): Action<typeof payload> => ({
        type: TYPE.LOGIN_PENDING,
        payload
    }),
    failed: (payload = 'Login failed'): Action<typeof payload> => ({
        type: TYPE.LOGIN_FAILED,
        payload
    }),
}

const register = {
    success: (payload: IProfileDTO): Action<typeof payload> => ({
        type: TYPE.REGISTER_SUCCESS,
        payload
    }),
    pending: (payload: Parameters<typeof ProfileAPI.register>[0]): Action<typeof payload> => ({
        type: TYPE.REGISTER_PENDING,
        payload
    }),
    failed: (payload = 'Login failed'): Action<typeof payload> => ({
        type: TYPE.REGISTER_FAILED,
        payload
    }),
}

const signOut = {
    pending: (): Action => ({
        type: TYPE.REGISTER_PENDING,
        payload: undefined
    })
}

const actions = {
    login,
    register,
    signOut,
}

export default actions
