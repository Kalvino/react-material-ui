import { FC, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import CloseIcon from "@mui/icons-material/Close";
import Login from "@mui/icons-material/Login";
import SignupDialog from "./signup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IAuthFormInput } from "../../interfaces/auth-form-input";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import FormField from "../reusables/FormField";

import { teal, grey } from "@mui/material/colors";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(20).required(),
}).required();

export const SigninDialog: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<IAuthFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const formSubmitHandler: SubmitHandler<IAuthFormInput> = (data: IAuthFormInput) => {
    console.log(data)
  };

  // console.log(watch()); //TODO(delete this) watch input value by passing the name of it

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ marginLeft: "1rem" }}
      >
        Sign in
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <DialogTitle>
            <Grid container direction="row">
              <Grid item xs={10}>
                <Typography variant="h5">Login</Typography>
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
                <Typography variant="h3">Image</Typography>
              </Grid>
              <Grid item xs={8}>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  justifyItems="left"
                >
                  <Grid item>
                    <FormField
                      name="email"
                      Component={TextField}
                      label="Email"
                      style={{ marginBottom: 20 }}
                      fullWidth
                    />
                  </Grid>

                  <Grid item>
                    <FormField
                      name="password"
                      Component={TextField}
                      label="Password"
                      style={{ marginBottom: 20 }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <SignupDialog />
            <Button
              type="submit"
              variant="contained"
              endIcon={<Login />}
            >
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default SigninDialog;
