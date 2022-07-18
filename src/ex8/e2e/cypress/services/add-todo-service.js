import { ADD_TODO_INPUT, ADD_TODO_BUTTON } from "../constants/selectors";

const addTodo = (name) => {
  cy.get(ADD_TODO_INPUT).type(name);

  cy.intercept("POST", "/item").as("itemIntercept");
  cy.get(ADD_TODO_BUTTON).click();
  cy.wait("@itemIntercept");
};

export default addTodo;
