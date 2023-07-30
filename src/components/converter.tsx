import React, {useEffect, useState} from 'react';
import {Chip, Paper, Skeleton, Stack, TextField, Typography} from "@mui/material";
import CustomSelect from "./customSelect";
import {useGetCurrencyQuery} from "../store/api/currencyApi";
import {useInput} from "../hooks/useInput";
import {useSelect} from "../hooks/useSelect";
import {useConversion} from "../hooks/useConversion";

const styleWrapper = {
    position: 'fixed',
    top: `50%`,
    left: `50%`,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    maxWidth: 'max-content',
    borderRadius: 2,
    padding: `14px 28px`,
    border: `1px solid #3C3C3C`,
    transform: `translate(-50%, -50%)`,
}

const styleChip = {
    padding: `8px 14px`,
    borderRadius: 1,
}


const Converter = () => {
    const {data, isLoading, error} = useGetCurrencyQuery('')

    const [date, setDate] = useState('')


    useEffect(() => {
        if (data) setDate(new Date(data.Date).toLocaleString("ru"))
    }, [data])

    const handlerInput = useInput()
    const handlerSelect = useSelect()
    const sum = useConversion(handlerInput.value, data?.Valute ? +data.Valute[handlerSelect?.value]?.Value : 0)

    return (
        <Paper sx={styleWrapper}>
            <Typography variant="h2">Конвертер валют</Typography>

            <TextField
                {...handlerInput}
                helperText={handlerInput.error && "Поле должно содержать числовое значение"}
                sx={{textAlign: 'right'}}
            />

            {
                isLoading ? <Skeleton variant="rounded" width={`100%`} height={56}/> :
                    error ? <Stack sx={{height: 56, color: '#f44336'}}>Данные не загружены</Stack> :
                        <CustomSelect handlerSelect={handlerSelect} data={data?.Valute}/>
            }

            <Stack direction={'row'} justifyContent={'end'} spacing={1}>
                <span>Итого</span>
                <Chip label={sum} color={'info'} variant={'outlined'} sx={styleChip}/>
            </Stack>

            {
                isLoading ? <Skeleton variant="rounded" width={`100%`} height={24}/>
                    : <Stack textAlign={'right'}>*Данные действительны на {date}</Stack>
            }


        </Paper>
    );
};

export default Converter;