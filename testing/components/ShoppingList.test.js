import ShoppingList from "./ShoppingList";
import { render, fireEvent, cleanup } from "@testing-library/react-native";

beforeEach(() => {
  cleanup();
});

test("given empty GroceryShoppingList, user can add an item to it", () => {
  const { getByPlaceholderText, getByText, getAllByText } = render(
    <ShoppingList />
  );

  fireEvent.changeText(getByPlaceholderText("Enter shopping item"), "banana");
  fireEvent.press(getByText("Add the item to list"));

  const bananaElements = getAllByText("banana");
  expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
});
