import StarWarsList from "../StarWarsList";
import { render, waitFor } from "@testing-library/react-native";

describe("StarWarsListComponent test", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              { name: "Tatooine", id: 1 },
              { name: "Alderaan", id: 2 },
            ],
          }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches the data and renders it correctly", async () => {
    const { getByText } = render(<StarWarsList />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

    expect(getByText("Alderaan")).toBeTruthy();
    expect(getByText("Tatooine")).toBeTruthy();
  });
});
