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
import { useCallback } from "react";
import CardLink from "./CardLink";

const paperStyle = { height: "100%" };

const cardStyle = { height: "100%", display: "flex", flexDirection: "column" };

const cardActionAreaStyle = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

const ProjectCard = ({
  title,
  description,
  github = null,
  site = null,
  image = null,
}) => {
  const openProject = useCallback(() => {
    const url = site || github;
    if (url) {
      window.open(url, "_blank");
    }
  }, [github, site]);

  return (
    <Paper elevation={3} sx={paperStyle}>
      <Box height={"100%"}>
        <Card sx={cardStyle}>
          <CardActionArea onClick={openProject} sx={cardActionAreaStyle}>
            <CardMedia
              component={"img"}
              height={300}
              image={"https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"}
            />
            <CardContent>
              <Typography gutterBottom variant={"h4"} mt={1}>
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
