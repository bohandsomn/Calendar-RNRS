import { call, fork, put, take } from 'redux-saga/effects'
import Node from '../../../utils/api-validate/node'
import { Action } from '../../data-flow/interface'
import ProfileAPI from '../api'
import IProfileDTO from '../dto'
import actions from '..'
import TYPE from './type'

export function* loginWorker(payload: Parameters<typeof ProfileAPI.login>[0]) {
    try {
        const node: Node<IProfileDTO> = yield call(ProfileAPI.login, payload)
        const status = node.metadata.status
        
        if (status === '4' || status === '5') {
            throw new Error()
        }

        yield put(actions.login.success(node.data))
    } catch (error) {
        yield put(actions.login.failed())
    }
}

function* loginWatcher() {
    while (true) {
        const action: Action<Parameters<typeof ProfileAPI.login>[0]> = yield take(TYPE.LOGIN_PENDING)
        yield fork(loginWorker, action.payload)
    }
}

export function* registerWorker(payload: Parameters<typeof ProfileAPI.register>[0]) {
    try {
        const node: Node<IProfileDTO> = yield call(ProfileAPI.register, payload)
        const status = node.metadata.status
        
        if (status === '4' || status === '5') {
            throw new Error()
        }

        yield put(actions.register.success(node.data))
    } catch (error) {
        yield put(actions.register.failed())
    }
}

function* registerWatcher() {
    while (true) {
        const action: Action<Parameters<typeof ProfileAPI.register>[0]> = yield take(TYPE.REGISTER_PENDING)
        yield fork(registerWorker, action.payload)
    }
}

const profile = {
    loginWatcher,
    registerWatcher,
}

export default profile
