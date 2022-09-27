export interface IAurDialog {
  open: boolean
  onClose(): any;
  title: string;
  content: any;
}