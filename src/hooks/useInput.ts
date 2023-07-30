import React, { useState} from "react";


export const useInput = () => {
    const [value, setValue] = useState<number>(0)
    const [error, setError] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(+e.target.value)  ) {
            setValue(+e.target.value)
            setError(false)
        }else{
            setError(true)
        }
    }

    return {
        value, onChange, error
    }
}