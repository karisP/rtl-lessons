import { render } from "@testing-library/react";
import LevelOne from "./LevelOne";

describe("LevelOne", () => {
  //render the component before each test
  beforeEach(() => {
    render(<LevelOne />);
  });
  it("has...", () => {
    //query for the element
    //write an assertion
  });
});
