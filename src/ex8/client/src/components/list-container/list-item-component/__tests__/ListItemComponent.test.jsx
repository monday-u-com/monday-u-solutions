import { render } from "@testing-library/react";
import ListItemComponent from "../ListItemComponent";

describe("ListItemComponent", () => {
  test("should render with no parameters", () => {
    const tree = render(<ListItemComponent />);
    expect(tree).toMatchSnapshot();
  });
});
