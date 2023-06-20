import { FC, MouseEventHandler, MouseEvent, useState, useContext } from "react";
import Button from "@mui/material/Button";
import AuthForm from "../forms/AuthForm";
import AurDialog from "../AurDialog";
import { IAuthButton } from "../../interfaces/IAuthButton";
import { getAuthFormDetails } from "./authFormDetails"
import useToggle from "../../hooks/useToggle";

const AuthButton: FC<IAuthButton> = ({ authType }) => {

  const [open, toggle, setOpen] = useToggle(false);

  const formDetails = getAuthFormDetails(authType);

  // const handleClick = (event: MouseEvent): void => {
  //   console.log(value);

  //   toggle();
  // }

  return (
    <>
      <Button
        variant="outlined"
        onClick={toggle}
        data-testid="toggle"
        sx={{ marginLeft: "1rem" }}
      >
        {authType}
      </Button>

      <AurDialog
        title={authType}
        open={open}
        toggle={toggle}
        setOpen={setOpen}
        content={<AuthForm {...toggle} {...formDetails} />}
      />
    </>
  );
}

export default AuthButton;
