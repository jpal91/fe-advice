import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container } from "@mui/material";

import theme from "./assets";
import Content from "./components/Content";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth='xl' sx={{ mt: '15%' }}>
                <Content />
            </Container>
        </ThemeProvider>
    );
};

export default App;
