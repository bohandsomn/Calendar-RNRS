import type { RootState } from '.'

export const profileSelector = (state: RootState) => state.profile
export const toDoListSelector = (state: RootState) => state.toDoList
