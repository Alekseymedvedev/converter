import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IData} from "../../types/types";


export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.cbr-xml-daily.ru/daily_json.js',
    }),
    endpoints: (build) => ({
        getCurrency: build.query<IData,''>({
            query: () => ({
                url: ``,
            }),
        }),
    })
});

export const { useGetCurrencyQuery } = currencyApi;

