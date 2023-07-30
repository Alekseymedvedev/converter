import  {useEffect, useState} from "react";
import {SelectChangeEvent} from "@mui/material";


export const useSelect = () => {
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        const currency = localStorage.getItem('currency')
        currency && setValue(currency)
    }, [])

    const onChange = (e: SelectChangeEvent) => {
        setValue(e.target.value);
        localStorage.setItem('currency', e.target.value)
    }

    return {
        value, onChange
    }
}