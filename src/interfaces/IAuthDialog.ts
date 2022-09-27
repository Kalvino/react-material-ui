import { IAuth } from "./IAuth";

export interface IAuthDialog {
  isOpen: boolean;
  toggleIsOpen(): any;
  title?: string;
  formName?: string
  content?: any;
}