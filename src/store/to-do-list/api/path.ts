import Path from '../../data-flow/path'

class ToDoList extends Path {
    public readonly create = this.damainName + 'to-do'
    public readonly getOne = this.damainName + 'to-do'
    public readonly delete = this.damainName + 'to-do'
}

const path = new ToDoList()

export default path
