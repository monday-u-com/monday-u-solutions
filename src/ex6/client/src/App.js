import TodoAppContainer from "./components/todo-app-container/TodoAppContainer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <TodoAppContainer />
    </div>
  );
}

export default App;
