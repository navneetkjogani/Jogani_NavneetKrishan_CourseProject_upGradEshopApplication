import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/layout/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    disabled: {
      main: "#56595c",
    },
  },
});

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
