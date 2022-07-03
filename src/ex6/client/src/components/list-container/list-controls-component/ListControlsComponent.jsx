import { useCallback, useState } from "react";
import TextField from "monday-ui-react-core/dist/TextField";
import Button from "monday-ui-react-core/dist/Button";
import Add from "monday-ui-react-core/dist/icons/Add";
import PropTypes from "prop-types";
import ListApiService from "../../../services/list-api-service"
import styles from "./ListControlsComponent.module.scss";

function ListControlsComponent({ onChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  const onInputChange = useCallback(value => {
    setName(value);
  }, [])

  const addItem = useCallback(async () => {
    setIsLoading(true);
    await ListApiService.postItem(name)
    onChange(name);
    setIsLoading(false);
  }, [name])

  const handleEnterPressed = useCallback(event => {
    if (event.key === "Enter") {
      event.preventDefault();
      addItem(name);
    }
  }, [addItem, name])

  return (
    <div className={styles.container} >
      <TextField placeholder="Add your new todo"
                 size={TextField.sizes.MEDIUM}
                 classNamxe={styles.input}
                 onChange={onInputChange}
                 onKeyDown={handleEnterPressed}/>
      <Button rightIcon={Add} isDisabled={isLoading} isLoading={isLoading} onClick={addItem}/>
    </div>
  );
}

ListControlsComponent.propTypes = {
  onChange: PropTypes.func
};

export default ListControlsComponent;
