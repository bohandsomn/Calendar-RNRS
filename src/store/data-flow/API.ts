import APIValidate from '../../utils/api-validate'

import type Node from '../../utils/api-validate/node'
import type Options from './options'

class API {
    public static async json<Data>(input: RequestInfo, options: Options): Promise<Node<Data>> {
        return fetch(input, options)
            .then((response) => APIValidate.json<Data>(response))
    }
}

export default API
