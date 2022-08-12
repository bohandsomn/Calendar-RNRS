import { all, call, spawn } from 'redux-saga/effects'
import profile from './profile/saga'
import toDoList from './to-do-list/saga'

function* saga () {
    const sagas = [profile.loginWatcher, profile.registerWatcher, toDoList.createWatcher, toDoList.getOneWatcher, toDoList.deleteWatcher]
  
    yield all(sagas.map((saga) => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(e)
                }
            }
        })
    }))
}

export default saga
