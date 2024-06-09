export type TodoDataType = {
  id: number;
  name: string;
  status: "open" | "completed" | "pending";
  isEdit: boolean;
};

export const initTodoData: TodoDataType[] = [
  {
    id: 1,
    name: "Todo 1",
    status: "open",
    isEdit: false,
  },
  {
    id: 2,
    name: "Todo 2",
    status: "open",
    isEdit: false,
  },
  {
    id: 3,
    name: "Todo 3",
    status: "completed",
    isEdit: false,
  },
  {
    id: 4,
    name: "Todo 4",
    status: "open",
    isEdit: false,
  },
  {
    id: 5,
    name: "Todo 5",
    status: "open",
    isEdit: false,
  },
  {
    id: 6,
    name: "Todo 6",
    status: "open",
    isEdit: false,
  },
  {
    id: 7,
    name: "Todo 7",
    status: "open",
    isEdit: false,
  },
];
