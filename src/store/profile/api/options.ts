import Options from '../../data-flow/options'
import { Request } from './req-res'

class Profile {
    public login() {
        return Options.GET({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    }

    public register(requesr: Request['register']) {
        return Options.POST({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, requesr)
    }
}

const options = new Profile()

export default options
