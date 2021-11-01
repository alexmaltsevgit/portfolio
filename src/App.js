import "./App.css";
import Header from "./components/Header";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import projects from "./projects.json";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box mt={7}>
          <Header />
        </Box>

        <Grid container spacing={7} mt={4} mb={15} alignItems={"stretch"}>
          {projects.map((project) => {
            return (
              <Grid item xs={12} md={6} key={project.title}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  site={project.site}
                  image={project.image}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
