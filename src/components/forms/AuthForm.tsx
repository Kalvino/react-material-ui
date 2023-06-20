import { FC, useRef, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Login from "@mui/icons-material/Login";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IAuth } from "../../interfaces/IAuth";
import { yupResolver } from '@hookform/resolvers/yup';

import { teal, grey } from "@mui/material/colors";
import { IAuthFormDetails } from "../../interfaces/IAuthFormDetails";
import { useSignup } from "../../hooks/useSignup";
import { IAuthUser } from "../../interfaces/IAuthUser";
import ErrorProcessor from "../../utils/ErrorProcessor";
import LinearProgress from "@mui/material/LinearProgress";

const AuthForm: FC<IAuthFormDetails> = ({ authType, authSchema, defaultValues, toggle }) => {

  const { signup, isLoading, authErrors } = useSignup(toggle);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAuth, IAuthUser>({
    resolver: yupResolver(authSchema),
    defaultValues: defaultValues
  });

  const formSubmitHandler: SubmitHandler<IAuth> = async (data, e) => {
    e?.preventDefault();

    signup(data);
  };

  return (
    <>
      {isLoading && <LinearProgress />}
      {authErrors && (ErrorProcessor(authErrors))}

      <form data-testid="auth-form" onSubmit={handleSubmit(formSubmitHandler)}>

        {authType == 'Sign Up' &&
          <Grid item>
            <Controller
              control={control}
              name="username"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
                formState
              }) => (
                <TextField
                  label="Username"
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={error?.message}
                  type="text"
                  style={{ marginBottom: 20 }}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
        }

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
                  autoComplete="off"
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
              disabled={isLoading}
              endIcon={<Login />}
            >
              {authType}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>


  );
}

export default AuthForm