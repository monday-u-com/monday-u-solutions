import { Command } from "commander";
import ItemManager from "../logic/todo_manager.js";

class Cli {
  constructor() {
    this.program = new Command();
  }

  _configMetadata() {
    this.program.name("To-Catch");
    this.program.description("Pokemons to catch app");
    this.program.version("'0.0.1");
  }

  _configCommands() {
    this._configAdd();
    this._configGet();
    this._configDelete();
  }

  _configAdd() {
    this.program
      .command("add")
      .description("Add cache pokemon task")
      .argument("<string>", "pokemon list separate by comma")
      .action(async (toDo) => {
        await ItemManager.addTodo(toDo);
        console.log("New todo added successfully");
      });
  }

  _configGet() {
    this.program
      .command("get")
      .description("Get all todos")
      .action(() => {
        const todos = ItemManager.getTodos();
        todos.forEach((todo) => console.log(todo));
      });
  }

  _configDelete() {
    this.program
      .command("delete")
      .description("Delete pokemon")
      .argument("<string>", "Delete pokemon by id")
      .action((id) => {
        ItemManager.deleteTodo(id);
        console.log("Todo deleted successfully");
      });
  }

  init() {
    this._configMetadata();
    this._configCommands();
    this.program.parse(process.argv);
  }
}

export default new Cli();
