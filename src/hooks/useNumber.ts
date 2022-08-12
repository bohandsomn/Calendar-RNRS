import { useCallback, useState } from 'react'

const useNumber = (initialValue: number) => {
    const [number, setNumber] = useState(initialValue)

    const increment = useCallback((number?: number) => {
        return number === undefined 
            ? setNumber((previous) => previous + 1)
            : setNumber(number)
    }, [number])
    const decrement = useCallback((number?: number) => {
        return number === undefined 
            ? setNumber((previous) => previous - 1)
            : setNumber(number)
    }, [number])

    return [number, increment, decrement] as const
}

export default useNumber
