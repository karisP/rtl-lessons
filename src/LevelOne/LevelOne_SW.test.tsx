import { render, screen } from "@testing-library/react";
import LevelOne from "./LevelOne";
import App from "../App"

describe("LevelOne", () => {
  //render the component before each test
  beforeEach(() => {
    render(<LevelOne />);
  });

  it("should have a 'Level One' heading", () => {
    expect(screen.getByRole("heading", {
      name: /level one/i
    })).toBeInTheDocument();
  });

  it("should have two text elements", () => {
    expect(screen.getByText("Bewildered tiaras in Fairy God Mothers daily ran an Aladdin.")).toBeInTheDocument();
    expect(screen.getByText("A tiny Ginger Bread Man soon ran the beanstalk.")).toBeInTheDocument();
  });

  it("should have an input with the label of 'Your Princess Name'", () => {
    expect(screen.getByLabelText("Your Princess Name")).toBeInTheDocument();
  });

  it("should have an input with a placeholder of 'FaIRy TaleS'", () => {
    expect(screen.getByPlaceholderText("FaIRy TaleS")).toBeInTheDocument();
  });

  it("should have an input with a value of 'The Brothers Grimm'", () => {
    expect(screen.getByDisplayValue("The Brothers Grimm")).toBeInTheDocument();
  });

  it("should have a select with a label of 'Choose a Knight' with two options", () => {
    const knightSelect = screen.getByLabelText("Choose a Knight:")
    expect(knightSelect).toBeInTheDocument();
    expect(knightSelect.childElementCount).toBe(2);
  });

  it("should have clickable button that says 'Click Me!'", () => {
    const clickableButton = screen.getByRole("button", {
      name: "Click Me!"
    });
    expect(clickableButton).toBeInTheDocument();
    expect(clickableButton).toBeEnabled();
  });

  it("should have a disabled button that says 'Can't Touch This'", () => {
    const disabledButton = screen.getByRole("button", {
      name: "Can't touch this!"
    });
    expect(disabledButton).toBeInTheDocument();
    expect(disabledButton).toBeDisabled();
  });
});
