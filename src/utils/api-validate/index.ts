import Node from './node'

class APIValidate {
    public static json = async <Data>(response: Response) => {
        const data: Data = await response.json()
        const status = response.status.toString()[0] as Node<Data>['metadata']['status']
        
        if (response.ok) {
            return new Node(data, {
                status: status as '1' | '2' | '3'
            })
        }

        return new Node(data, {
            status: status as '4' | '5'
        })
    }
}

export default APIValidate
