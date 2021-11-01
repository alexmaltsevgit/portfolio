import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useCallback, useMemo } from "react";
import CardLink from "./CardLink";

const styles = makeStyles({
  paper: {
    height: "100%",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardActionArea: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

const stockPhoto = "https://i.ibb.co/9ZYkd91/maxresdefault.jpg";

const ProjectCard = ({
  title,
  description,
  github = null,
  site = null,
  image = null,
}) => {
  const classes = useMemo(styles, []);

  const openProject = useCallback(() => {
    const url = site || github;
    if (url) {
      window.open(url, "_blank");
    }
  }, [github, site]);

  return (
    <Paper elevation={3} classes={classes.paper}>
      <Box height={"100%"}>
        <Card classes={classes.card}>
          <CardActionArea
            onClick={openProject}
            classes={classes.cardActionArea}
          >
            <CardMedia
              component={"img"}
              height={300}
              image={image || stockPhoto}
              sx={{
                objectFit: image ? "scale-down" : "cover",
              }}
            />
            <CardContent>
              <Typography variant={"h4"} mt={1}>
                {title}
              </Typography>

              <Typography variant={"h6"} mt={2} color={"text.secondary"}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Box
              px={1}
              py={1}
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
            >
              {github && <CardLink href={github}>Github</CardLink>}
              {site && <CardLink href={site}>Сайт</CardLink>}
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
