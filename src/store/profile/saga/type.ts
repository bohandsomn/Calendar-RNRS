const name = 'profile'
const LOGIN = '/login'
const REGISTER = '/register'
const SIGN_OUT = '/sign-out'

const TYPE = {
    LOGIN_SUCCESS: name + LOGIN + '/success',
    LOGIN_PENDING: name + LOGIN + '/pending',
    LOGIN_FAILED: name + LOGIN + '/failed',
    REGISTER_SUCCESS: name + REGISTER + '/success',
    REGISTER_PENDING: name + REGISTER + '/pending',
    REGISTER_FAILED: name + REGISTER + '/failed',
    SIGN_OUT
}

export default TYPE
