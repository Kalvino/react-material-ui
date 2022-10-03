import { FC, MouseEventHandler, MouseEvent, useState } from "react";
import Button from "@mui/material/Button";
import AuthForm from "../forms/AuthForm";
import AurDialog from "../AurDialog";
import { IAuthButton } from "../../interfaces/IAuthButton";
import { getAuthFormDetails } from "./authFormDetails"


const AuthButton: FC<IAuthButton> = ({ authType }) => {

  const formDetails = getAuthFormDetails(authType);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = (event: MouseEvent): void => {
    setIsOpen(prevState => !prevState);
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={toggleIsOpen}
        data-testid="toggle"
        sx={{ marginLeft: "1rem" }}
      >
        {authType}
      </Button>

      <AurDialog
        openState={isOpen}
        toggleOpenState={toggleIsOpen}
        title={authType}
        content={<AuthForm {...formDetails} />}
      />
    </>
  );
}

export default AuthButton;
