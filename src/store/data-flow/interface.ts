type Success<Data> = {
    data: Data
    isLoading: false
    error: null
}

type Pending = {
    data: null
    isLoading: true
    error: null
}

type PendingAfterSuccess<Data> = {
    data: Data
    isLoading: true
    error: null
}

type Failed = {
    data: null
    isLoading: false
    error: string
}

type FailedAfterSuccess<Data> = {
    data: Data
    isLoading: false
    error: string
}

export type State<Data> = 
    Success<Data> | 
    PendingAfterSuccess<Data> | 
    Pending | 
    FailedAfterSuccess<Data> |
    Failed

export type Action<Payload = void> = {
    type: string
    payload: Payload
}
