import { Box, Paper, Typography } from "@mui/material";

const Header = () => {
  return (
    <Paper elevation={3}>
      <Box py={5} px={7}>
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
