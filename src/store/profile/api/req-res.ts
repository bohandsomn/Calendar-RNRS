import IProfileDTO from "../dto"

export type Request = {
    login: Pick<IProfileDTO, 'login' | 'password'>
    register: IProfileDTO
}

export type Response = {
    login: [IProfileDTO]
    register: IProfileDTO
}
