import { createTheme } from "@mui/material";

import typography from './base/typography'
import colors from './base/colors'
import breakpoints from "./base/breakpoints";
import container from './base/components/container'
import borders from './base/borders'
import card from "./base/components/card";

export default createTheme({
    typography: { ...typography },
    palette: { ...colors },
    breakpoints: { ...breakpoints },
    borders: { ...borders },
    components: {
        MuiContainer: { ...container },
        MuiCard: { ...card },
        
    }
})