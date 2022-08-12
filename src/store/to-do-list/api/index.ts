import Node from '../../../utils/api-validate/node'

import { Request, Response } from './req-res'
import API from '../../data-flow/API'
import path from './path'
import options from './options'
import IToDoList, { IToDo } from '../dto'

class ToDoListAPI {
    public static async create(request: Request['create']): Promise<Node<IToDo>> {
        const response = await API.json<Response['create']>(
            path.create, 
            options.create(request)
        )

        const node = new Node(response.data, response.metadata)
        return node
    }

    public static async getOne(request: Request['getOne']): Promise<Node<IToDoList>> {
        const response = await API.json<Response['getOne']>(
            `${path.getOne}/${request.userId}/to-do/?date=${request.date}`, 
            options.getOne()
        )

        const date = request.date
        const list = response.data

        const node = new Node({
            [date]: list
        }, response.metadata)
        return node
    }

    public static async delete(request: Request['delete']): Promise<Node<Response['delete']>> {
        const response = await API.json<{}>(
            `${path.delete}/${request.id}`, 
            options.delete(request)
        )

        const node = new Node(request, response.metadata)

        return node
    }
}

export default ToDoListAPI
