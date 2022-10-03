import { MouseEvent, ReactNode } from "react";

export interface IAurDialog {
  openState: boolean;
  toggleOpenState: (e: MouseEvent) => void;
  title: string;
  content: ReactNode;
}
