import "./App.css";
import Header from "./components/Header";
import { Box, Container, CssBaseline, Typography } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Typography>
        <Container>
          <Box mt={5}>
            <Header>hello</Header>
          </Box>
        </Container>
      </Typography>
    </>
  );
}

export default App;
