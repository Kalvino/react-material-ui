import { FC, MouseEventHandler, MouseEvent, useState } from "react";
import Button from "@mui/material/Button";
import AuthForm from "../forms/AuthForm";
import AurDialog from "../AurDialog";
import { IAuthType } from "../../interfaces/IAuthType";


const AuthButton: FC<IAuthType> = (props) => {

  const { authType } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = (event: MouseEvent): void => {
    setIsOpen(prevState => !prevState);
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={toggleIsOpen}
        sx={{ marginLeft: "1rem" }}
      >
        {authType}
      </Button>

      <AurDialog
        openState={isOpen}
        toggleOpenState={toggleIsOpen}
        title={authType}
        content={<AuthForm {...props} />}
      />
    </>
  );
}

export default AuthButton;
