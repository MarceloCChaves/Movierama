export interface IButton {
  text: string;
  disabled: boolean;
  type: 'submit' | 'reset' | 'button' | undefined;
  classes: string;
  onclick: React.MouseEventHandler<HTMLButtonElement>;
}
