const NAME = 'to-do-list'
const GET_ONE = '/get-one'
const CREATE = '/create'
const DELETE = '/delete'

const TYPE = {
    GET_ONE_SUCCESS: NAME + GET_ONE + '/success',
    GET_ONE_PENDING: NAME + GET_ONE + '/pending',
    GET_ONE_FAILED: NAME + GET_ONE + '/failed',
    CREATE_SUCCESS: NAME + CREATE + '/success',
    CREATE_PENDING: NAME + CREATE + '/pending',
    CREATE_FAILED: NAME + CREATE + '/failed',
    DELETE_SUCCESS: NAME + DELETE + '/success',
    DELETE_PENDING: NAME + DELETE + '/pending',
    DELETE_FAILED: NAME + DELETE + '/failed',
}

export default TYPE
