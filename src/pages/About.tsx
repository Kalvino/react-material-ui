import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import RequireAuth from "../components/auth/RequireAuth";

const About: FC<any> = (): ReactElement => {
  return (
    <RequireAuth>
      <Box sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography variant="h3">About</Typography>
      </Box>
    </RequireAuth>
  );
};

export default About;