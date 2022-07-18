import addTodo from "../services/add-todo-service";
import { LIST_ITEM_TEXT } from "../constants/selectors";

describe("Add Todo Action", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should add a new todo", () => {
    const newTodoName = "test todo";

    addTodo(newTodoName);

    cy.get(LIST_ITEM_TEXT).should("have.text", newTodoName);
  });
});
