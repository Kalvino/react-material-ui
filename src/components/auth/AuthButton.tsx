import { FC, useState } from "react";
import Button from "@mui/material/Button";
import AuthForm from "../forms/AuthForm";
import AurDialog from "../AurDialog";
import { IAuthType } from "../../interfaces/IAuthType";


const AuthButton: FC<IAuthType> = ({ authType, authSchema, defaultValues }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen: any = (event: React.MouseEvent<any>) => {
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
        open={isOpen}
        onClose={toggleIsOpen}
        title={authType}
        content={<AuthForm authType={authType} authSchema={authSchema} defaultValues={defaultValues} />}
      />
    </>
  );
}

export default AuthButton;
