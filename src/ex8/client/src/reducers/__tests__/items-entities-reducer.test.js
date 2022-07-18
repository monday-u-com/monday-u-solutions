import itemsEntitiesReducer from "../items-entities-reducer";
import actionTypes from "../../actions/constants";

describe("itemsEntitiesReducer", () => {
  test("should return the initial state", () => {
    expect(itemsEntitiesReducer(undefined, {})).toEqual({});
  });

  test("should handle an item being added to an empty list", () => {
    const previousState = [];

    const ITEM_TO_ADD = { id: 2, name: "test item" };

    expect(
      itemsEntitiesReducer(previousState, {
        type: actionTypes.ADD_ITEM_SUCCESS,
        item: ITEM_TO_ADD,
      })
    ).toEqual({ [ITEM_TO_ADD.id]: ITEM_TO_ADD });
  });

  test("should handle an item being added to an existing list", () => {
    const FIRST_ITEM = { id: 0, name: "eat pizza" };
    const SECOND_ITEM = { id: 1, name: "cool item" };
    const previousState = [FIRST_ITEM, SECOND_ITEM];

    const ITEM_TO_ADD = { id: 2, name: "test item to add" };

    expect(
      itemsEntitiesReducer(previousState, {
        type: actionTypes.ADD_ITEM_SUCCESS,
        item: ITEM_TO_ADD,
      })
    ).toEqual({
      [FIRST_ITEM.id]: FIRST_ITEM,
      [SECOND_ITEM.id]: SECOND_ITEM,
      [ITEM_TO_ADD.id]: ITEM_TO_ADD,
    });
  });
});
