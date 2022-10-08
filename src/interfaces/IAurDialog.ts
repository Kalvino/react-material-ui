import { MouseEvent, ReactNode } from "react";

export interface IAurDialog {
  openState: boolean;
  onClose: (e: MouseEvent) => void;
  title: string;
  content: ReactNode;
}
