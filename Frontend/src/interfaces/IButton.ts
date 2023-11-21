export interface IButton {
  text: string | React.ReactNode;
  disabled?: boolean;
  type: 'submit' | 'reset' | 'button' | undefined;
  classes: string;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
}
