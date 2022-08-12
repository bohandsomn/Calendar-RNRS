import { call, put } from 'redux-saga/effects'

import { getOneWorker, createWorker, deleteWorker } from '.'
import actions from '..'
import ProfileAPI from '../api'

describe('To do list saga', () => {
    it('should get one failed', () => {
        const payload = {
            "userId": 1,
            "date": "2022-08-02"
        }
        const generator = getOneWorker(payload)
        
        expect(generator.next().value).toEqual(call(ProfileAPI.getOne, payload))
        expect(generator.next().value).toEqual(put(actions.getOne.failed()))
        expect(generator.next().done).toBe(true)
    })

    it('should create failed', () => {
        const payload = {
            id: 100,
            userId: 1,
            date: '2022-08-12',
            header: 'Header',
            content: 'Content'
        }
        const generator = createWorker(payload)
        
        expect(generator.next().value).toEqual(call(ProfileAPI.create, payload))
        expect(generator.next().value).toEqual(put(actions.create.failed()))
        expect(generator.next().done).toBe(true)
    })

    it('should delete success', () => {
        const payload = {
            id: 100,
            date: '2022-08-12',
        }
        const generator = deleteWorker(payload)
        
        expect(generator.next().value).toEqual(call(ProfileAPI.delete, payload))
        expect(generator.next().value).toEqual(put(actions.delete.failed()))
        expect(generator.next().done).toBe(true)
    })
})