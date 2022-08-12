import { useCallback, useState } from 'react'

const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = useCallback((text: string) => {
        setValue(text)
    }, [setValue])

    return [value, handleChange] as const
}

export default useInput