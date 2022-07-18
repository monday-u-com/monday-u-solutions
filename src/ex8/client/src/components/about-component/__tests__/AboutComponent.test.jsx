import { render } from "@testing-library/react";
import AboutComponent from "../AboutComponent";

describe("AboutComponent", () => {
  test("should render with no parameters", () => {
    const tree = render(<AboutComponent />);
    expect(tree).toMatchSnapshot();
  });
});
