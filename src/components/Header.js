import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";

const Header = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper elevation={3}>
      <Box py={isSmall ? 3 : 5} px={isSmall ? 5 : 7}>
        <Typography variant={"h2"} letterSpacing={1}>
          Александр Мальцев
        </Typography>
        <Typography variant={"h4"} mt={2}>
          Портфолио
        </Typography>
      </Box>
    </Paper>
  );
};

export default Header;
