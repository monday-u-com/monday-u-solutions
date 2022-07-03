import { useEffect, useState, useCallback, useMemo } from "react";
import { List, Loader } from "monday-ui-react-core";
import ListApiService from "../../services/list-api-service";
import ListControlsComponent from "./list-controls-component/ListControlsComponent";
import ListItemComponent from "./list-item-component/ListItemComponent";
import styles from "./ListContainer.module.scss";

function ListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRefetchItems, setRefetchItems] = useState(false);

  const fetchItems = async () => {
    try {
      const fetchedItems = await ListApiService.getItems();
      setIsLoading(false);
      setRefetchItems(false);
      setItems(fetchedItems);
    } catch (err) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (shouldRefetchItems) fetchItems();
  }, [shouldRefetchItems]);

  const onChangeInItems = useCallback(() => {
    setRefetchItems(true);
  }, []);

  const itemsList = useMemo(() => {
    return items.map(({ id, name, status }) => {
      return <ListItemComponent key={id} id={id} name={name} status={!!status} onChange={onChangeInItems} />;
    });
  }, [items]);

  if (isLoading || shouldRefetchItems) return <Loader size={40} />;

  return (
    <div className={styles.container}>
      <ListControlsComponent onChange={onChangeInItems} />
      <List className={styles.list}>
        {itemsList}
      </List>
    </div>
  );
}

export default ListContainer;
