import { Heading } from "monday-ui-react-core";
import { Route, Routes } from "react-router-dom";
import { ROUTES_MAPPING } from "../nav-bar-component/consts"
import NavBarComponent from "../nav-bar-component/NavBarComponent"
import ListContainer from "../list-container/ListContainer";
import AboutComponent from "../about-component/AboutComponent";
import styles from "./TodoAppContainer.module.scss";

function TodoList() {
  return (
    <>
      <Heading type={Heading.types.h1} className={styles.name} value="Todo App" />
      <ListContainer />
    </>
  );
}

function TodoAppContainer() {
  return (
    <div className={styles.container}>
      <NavBarComponent />
      <Routes>
        <Route path={ROUTES_MAPPING.TODO_LIST} element={<TodoList />} />
        <Route path={ROUTES_MAPPING.ABOUT} element={<AboutComponent />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default TodoAppContainer;
