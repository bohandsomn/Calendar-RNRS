import Path from '../../data-flow/path'

class Profile extends Path {
    public readonly login = this.damainName + 'profile'
    public readonly register = this.damainName + 'profile'
}

const path = new Profile()

export default path
