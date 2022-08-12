import Options from '../../data-flow/options'
import { Request } from './req-res'

class ToDoList {
    public getOne() {
        return Options.GET({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    }
    
    public create(request: Request['create']) {
        return Options.POST({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, request)
    }
    
    public delete(request: Request['delete']) {
        return Options.DELETE({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, request)
    }
}

const options = new ToDoList()

export default options
