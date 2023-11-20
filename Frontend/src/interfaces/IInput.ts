export interface IInput {
  placeholder: string;
  value: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  classes: string;
  type: "text" | "number" | "file" | undefined;
}
