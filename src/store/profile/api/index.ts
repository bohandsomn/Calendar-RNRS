import Node from '../../../utils/api-validate/node'

import type IProfileDTO from '../dto'
import { Request, Response } from './req-res'
import API from '../../data-flow/API'
import path from './path'
import options from './options'

class ProfileAPI {
    public static async login(request: Request['login']): Promise<Node<IProfileDTO>> {
        const response = await API.json<Response['login']>(
            `${path.login}/?login=${request.login}&password=${request.password}`, 
            options.login()
        )

        const node = new Node(response.data[0], response.metadata)
        
        return node
    }

    public static async register(request: Request['register']): Promise<Node<IProfileDTO>> {
        const response = await API.json<Response['register']>(
            path.register, 
            options.register(request)
        )
        
        return response
    }
}

export default ProfileAPI
