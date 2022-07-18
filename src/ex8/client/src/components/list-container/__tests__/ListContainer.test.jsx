import { render, screen } from "@testing-library/react";
import ListContainer from "../ListContainer";
import { Provider } from "react-redux";
import { store } from "../../../store";

const items = [
  {
    id: 56,
    name: "Take dog out for a walk",
    status: false,
  },
  {
    id: 32,
    name: "Do the dishes",
    status: true,
  },
];

describe("ListContainer", () => {
  test("should render with no parameters", () => {
    render(
      <Provider store={store}>
        <ListContainer items={items} fetchItems={jest.fn(() => items)} />
      </Provider>
    );

    const firstItem = screen.getByText("Take dog out for a walk");
    const secondItem = screen.getByText("Do the dishes");
    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();
  });

  test("should fetch new items when rendered", () => {
    const mockFetchItems = jest.fn();
    render(
      <Provider store={store}>
        <ListContainer items={items} fetchItems={mockFetchItems} />
      </Provider>
    );

    expect(mockFetchItems).toHaveBeenCalled();
  });
});
