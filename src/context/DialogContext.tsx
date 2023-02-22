import { createContext } from "react";
import { IDialogContext } from "../interfaces/IDialogContext";

export const DialogContext = createContext<IDialogContext>({
  open: false,
  setOpen: (open: boolean) => { },
});
