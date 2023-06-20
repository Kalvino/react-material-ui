import { Dispatch, MouseEvent, ReactNode, SetStateAction } from "react";

export interface IAurDialog {
  title: string;
  open: boolean;
  toggle: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  content: ReactNode;
}
