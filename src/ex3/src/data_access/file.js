import { writeFile, readFileSync, existsSync } from "fs";

const DATA_FILE_PATH = "./data/todos.txt";
const INIT = [];

class File {
  getTodos = () => {
    const fileExists = existsSync(DATA_FILE_PATH);
    if (fileExists) {
      return JSON.parse(readFileSync(DATA_FILE_PATH, "utf8"));
    } else {
      return INIT;
    }
  };

  addTodo = (newTodo) => {
    let todos = this.getTodos();
    todos = [...todos, newTodo];
    try {
      this._saveToFile(todos);
    } catch (error) {
      console.error("Fail to add todo");
      throw error;
    }
  };

  deleteTodo = (index) => {
    const todos = this.getTodos();
    if (todos.length <= index) {
      throw `No todo at index ${index}`;
    }
    todos.splice(index, 1);
    try {
      this._saveToFile(todos);
    } catch (error) {
      console.error("Fail to delete todo");
      throw error;
    }
  };

  _saveToFile(todos) {
    writeFile(DATA_FILE_PATH, JSON.stringify(todos), (error) => {
      if (error) {
        throw error;
      }
    });
  }
}

export default new File();
