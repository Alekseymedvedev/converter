import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {currencyApi} from "./api/currencyApi";



const rootReducer = combineReducers({
    [currencyApi.reducerPath]: currencyApi.reducer,

})


export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (gDM) => gDM().concat(
            currencyApi.middleware,
        ),
    });

