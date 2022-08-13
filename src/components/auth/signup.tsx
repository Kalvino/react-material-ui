import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import CloseIcon from '@mui/icons-material/Close';
import Login from '@mui/icons-material/Login';
import SendIcon from '@mui/icons-material/Send';
import SigninDialog from "./login";

import { teal, grey } from "@mui/material/colors";

export default function SignupDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ marginLeft: "1rem"}}>
        Sign up
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Grid container direction="row">
            <Grid item xs={10}>
              <Typography variant="h5">
                Sign up
              </Typography>
            </Grid>
            <Grid item xs={2} textAlign="right">
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent>
          <Grid container direction="row" spacing={2}>  
            <Grid item xs={4}>
              <Typography variant="h3">
                Image
              </Typography>
            </Grid>          
            <Grid item xs={8}>
              <Grid
                container
                direction="column"
                spacing={2}
                justifyItems="left"
              >
                <Grid item>
                  <TextField
                    autoFocus
                    style={{ marginBottom: 20 }}
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                
                <Grid item>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Password"
                    id="password"
                    type="password"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Password Confirmtion"
                    id="password-confirmation"
                    type="password"
                  />
                </Grid>
              </Grid>
            </Grid>            
          </Grid>
        </DialogContent>

        <DialogActions>
          <SigninDialog />
          <Button variant="contained" endIcon={<SendIcon />}>
            Signup
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
