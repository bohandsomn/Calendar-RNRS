import { call, fork, put, take } from 'redux-saga/effects'
import { Action } from '../../data-flow/interface'
import ToDoListAPI from '../api'
import actions from '..'
import TYPE from './type'

export function* getOneWorker(payload: Parameters<typeof ToDoListAPI.getOne>[0]) {
    try {
        const node: Awaited<ReturnType<typeof ToDoListAPI.getOne>> = yield call(ToDoListAPI.getOne, payload)
        const status = node.metadata.status
        
        if (status === '4' || status === '5') {
            throw new Error()
        }

        yield put(actions.getOne.success(node.data))
    } catch (error) {
        yield put(actions.getOne.failed())
    }
}

function* getOneWatcher() {
    while (true) {
        const action: Action<Parameters<typeof ToDoListAPI.getOne>[0]> = yield take(TYPE.GET_ONE_PENDING)
        yield fork(getOneWorker, action.payload)
    }
}

export function* createWorker(payload: Parameters<typeof ToDoListAPI.create>[0]) {
    try {
        const node: Awaited<ReturnType<typeof ToDoListAPI.create>> = yield call(ToDoListAPI.create, payload)
        const status = node.metadata.status
        
        if (status === '4' || status === '5') {
            throw new Error()
        }

        yield put(actions.create.success(node.data))
    } catch (error) {
        yield put(actions.create.failed())
    }
}

function* createWatcher() {
    while (true) {
        const action: Action<Parameters<typeof ToDoListAPI.create>[0]> = yield take(TYPE.CREATE_PENDING)
        yield fork(createWorker, action.payload)
    }
}

export function* deleteWorker(payload: Parameters<typeof ToDoListAPI.delete>[0]) {
    try {
        const node: Awaited<ReturnType<typeof ToDoListAPI.delete>> = yield call(ToDoListAPI.delete, payload)
        const status = node.metadata.status
        
        if (status === '4' || status === '5') {
            throw new Error()
        }

        yield put(actions.delete.success(node.data))
    } catch (error) {
        yield put(actions.delete.failed())
    }
}

function* deleteWatcher() {
    while (true) {
        const action: Action<Parameters<typeof ToDoListAPI.delete>[0]> = yield take(TYPE.DELETE_PENDING)
        yield fork(deleteWorker, action.payload)
    }
}

const toDoList = {
    getOneWatcher,
    createWatcher,
    deleteWatcher,
}

export default toDoList
