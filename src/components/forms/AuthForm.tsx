import { FC, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Login from "@mui/icons-material/Login";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IAuth } from "../../interfaces/IAuth";
import { yupResolver } from '@hookform/resolvers/yup';

import { teal, grey } from "@mui/material/colors";
import { IAuthFormDetails } from "../../interfaces/IAuthFormDetails";

const AuthForm: FC<IAuthFormDetails> = ({ authType, authSchema, defaultValues }) => {

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAuth>({
    resolver: yupResolver(authSchema),
    defaultValues: defaultValues
  });

  const formSubmitHandler: SubmitHandler<IAuth> = (data) => {
    console.log(data);
  };



  return (
    <form data-testid="auth-form" onSubmit={handleSubmit(formSubmitHandler)}>
      <Grid container direction="column" >
        <Grid item>
          <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
              formState
            }) => (
              <TextField
                {...{ value, onChange, onBlur }} //assign
                label="Email"
                error={!!error}
                helperText={error?.message}
                type="email"
                style={{ marginBottom: 20 }}
                margin="dense"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item>
          <Controller
            control={control}
            name="password"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
              formState
            }) => (
              <TextField
                label="Password"
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                error={!!error}
                helperText={error?.message}
                type="password"
                style={{ marginBottom: 20 }}
                margin="dense"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>

        {authType == 'Sign Up' &&
          <Grid item>
            <Controller
              control={control}
              name="password_confirmation"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
                formState
              }) => (
                <TextField
                  label="Password Confirmation"
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={error?.message}
                  type="password"
                  style={{ marginBottom: 20 }}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
        }
        <Grid item textAlign="right">
          <Button
            type="submit"
            variant="contained"
            endIcon={<Login />}
          >
            {authType}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AuthForm