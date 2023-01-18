import { Category } from "../types/Categories";

export const categories: Category = {
  food: {
    title: "Alimentação",
    color: "#7A3E1E",
    expense: true,
  },
  rent: {
    title: "Aluguel",
    color: "black",
    expense: true,
  },
  salary: {
    title: "Salário",
    color: "green",
    expense: false,
  },
  others: {
    title: "Gastos",
    color: "red",
    expense: true,
  },
  gains: {
    title: "Ganhos",
    color: "#472ed3",
    expense: false,
  },
};
