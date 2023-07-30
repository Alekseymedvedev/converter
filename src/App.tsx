import React from 'react';
import { CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme/customTheme";
import Converter from "./components/converter";
import './global.scss'




function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                <Converter/>
            </div>
        </ThemeProvider>
    );
}

export default App;
