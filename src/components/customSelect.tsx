import React, {FC} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {IValute} from "../types/types";

interface IHandlerSelect {
    onChange: (e: SelectChangeEvent) => void
    value: any
}

interface IType {
    data?: {
        [key: string]:IValute
    }
    handlerSelect: IHandlerSelect
}

const CustomSelect: FC<IType> = ({data,handlerSelect}) => {
    console.log(data)
    return (
        <FormControl>
            <InputLabel>Валюта</InputLabel>
            <Select
                label="Валюта"
                {...handlerSelect}
            >
                {
                    data && Object.keys(data).map((item) =>
                        <MenuItem

                            key={data[item].ID}
                            value={item}>
                            {`${data[item].Name} (${item})`}
                        </MenuItem>
                    )
                }
            </Select>
        </FormControl>
    );
};

export default CustomSelect;