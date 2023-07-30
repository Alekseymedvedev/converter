


export interface IValute{
    CharCode:string
    ID:string
    Name:string
    Nominal:number
    NumCode:string
    Previous:number
    Value:string
}

export interface IData extends IValute{
    Date:string
    PreviousDate:string
    PreviousURL:string
    Timestamp:string
    Valute: {
        [key: string]:IValute
    }
}