import Picker from "../Picker";
import { render } from "@testing-library/react-native";

describe("Picker component renders properly", () => {
  it("The Picker component renders properly", () => {
    expect(
      render(
        <Picker
          options={["Do something", "Don't do something"]}
          value=""
          setValue={() => {}}
        />
      )
    ).toMatchSnapshot();
  });
});
