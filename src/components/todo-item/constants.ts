import { TodoItemPropsType } from ".";

export const variantConfig: Record<
  TodoItemPropsType["variant"],
  React.CSSProperties
> = {
  default: {
    color: "#fff",
    borderColor: "#fff",
    background: "#1A1A40",
  },
  success: {
    color: "#2ecc71",
    borderColor: "#2ecc71",
    background: "#2ecc71",
  },
  error: {
    color: "#e74c3c",
    borderColor: "#e74c3c",
    background: "#e74c3c",
  },
};
