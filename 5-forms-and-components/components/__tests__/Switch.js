import Switch from "../Switch";
import { render, fireEvent } from "@testing-library/react-native";

describe("Switch component", () => {
  it("Render correctly", () => {
    // Arrange
    // Act
    const TEST_LABEL = "Test label";
    const { getByText } = render(
      <Switch label={TEST_LABEL} value={false} setValue={() => {}} />
    );

    // Assert
    expect(getByText(TEST_LABEL)).toBeTruthy();
  });

  it("calls the onValueChange function when pressed", () => {
    // Arrange : Given
    const setValue = jest.fn();
    const { getByTestId } = render(
      <Switch label="Label" value={false} setValue={setValue} />
    );

    // Act : When
    fireEvent(getByTestId("switch"), "onValueChange");

    // Assert : Then
    expect(setValue).toHaveBeenCalled();
  });
});
