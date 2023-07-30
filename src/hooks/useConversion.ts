import {useMemo, useState} from "react";


export const useConversion = (valueInput?: number, valueCurrency?: number) => {
    const [sum, setSum] = useState<number>(0)

    useMemo(() => {
        if(valueInput && valueCurrency) setSum(+valueInput * +valueCurrency)
    }, [valueInput,valueCurrency])
    return sum
}