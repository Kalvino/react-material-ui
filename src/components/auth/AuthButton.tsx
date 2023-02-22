import { FC, MouseEventHandler, MouseEvent, useState, useContext } from "react";
import Button from "@mui/material/Button";
import AuthForm from "../forms/AuthForm";
import AurDialog from "../AurDialog";
import { IAuthButton } from "../../interfaces/IAuthButton";
import { getAuthFormDetails } from "./authFormDetails"
import { IDialogContext } from "../../interfaces/IDialogContext";
import { DialogContext } from "../../context/DialogContext";


const AuthButton: FC<IAuthButton> = ({ authType }) => {
  const [open, setOpen] = useState<boolean>(false);

  const formDetails = getAuthFormDetails(authType);

  const handleClick = (event: MouseEvent): void => {
    setOpen(!open);
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        data-testid="toggle"
        sx={{ marginLeft: "1rem" }}
      >
        {authType}
      </Button>

      <DialogContext.Provider value={{ open, setOpen }}>
        <AurDialog
          title={authType}
          content={<AuthForm {...formDetails} />}
        />
      </DialogContext.Provider>
    </>
  );
}

export default AuthButton;
