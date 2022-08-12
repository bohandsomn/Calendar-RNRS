import { call, put } from 'redux-saga/effects'

import { loginWorker, registerWorker } from '.'
import actions from '..'
import ProfileAPI from '../api'

describe('Profile saga', () => {
    it('should login failed', () => {
        const payload = {
            login: 'bohandsomn',
            password: '12345678'
        }
        const generator = loginWorker(payload)
        
        expect(generator.next().value).toEqual(call(ProfileAPI.login, payload))
        expect(generator.next().value).toEqual(put(actions.login.failed()))
        expect(generator.next().done).toBe(true)
    })

    it('should register success', () => {
        const payload = {
            id: 100,
            name: 'Bohdan',
            login: 'bohandsomn',
            password: '12345678'
        }
        const generator = registerWorker(payload)
        
        expect(generator.next().value).toEqual(call(ProfileAPI.register, payload))
        expect(generator.next().value).toEqual(put(actions.register.failed()))
        expect(generator.next().done).toBe(true)
    })
})