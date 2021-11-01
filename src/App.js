import "./App.css";
import Header from "./components/Header";
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import projects from "./projects.json";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Box mt={7}>
          <Header />
        </Box>

        <Grid container spacing={7} mt={4} mb={15} alignItems={"stretch"}>
          {projects.map((project) => {
            return (
              <Grid item xs={12} lg={6} key={Math.random()}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  site={project.site}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default App;
