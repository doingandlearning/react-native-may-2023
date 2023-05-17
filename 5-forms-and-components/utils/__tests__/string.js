import { reverseString, createUserObject } from "../string";

it("correctly reverses a string", () => {
  // Arrange
  const startString = "I am learning React Native";
  const endString = "evitaN tcaeR gninrael ma I";

  // Act + Assert
  expect(reverseString(startString)).toEqual(endString);
});

it("correctly reverses a string", () => {
  // Arrange
  const startString = "I am learning React Native";
  const endString = "tcaeR gninrael ma I";

  // Act + Assert
  expect(reverseString(startString)).not.toEqual(endString);
});

it("createUserObject returns correct values", () => {
  const name = "Test User";
  const job = "Tester";

  expect(createUserObject(name, job)).toMatchObject({
    name,
    job,
    company: "Howdens",
  });
});
