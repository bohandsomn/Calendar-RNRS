import { useCallback, useState } from 'react'

const useToggle = (initialState: boolean) => {
    const [value, setValue] = useState(initialState)
    const handleToggle = useCallback(() => setValue((previous) => !previous), [setValue])

    return [value, handleToggle] as const
}

export default useToggle
