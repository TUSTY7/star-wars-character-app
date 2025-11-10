
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../pages/Home";


beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          results: [
            {
              name: "Luke Skywalker",
              height: "172",
              mass: "77",
              birth_year: "19BBY",
              films: ["film1", "film2"],
              homeworld: "https://swapi.dev/api/planets/1/",
            },
          ],
        }),
    })
  );
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("opens modal when clicking on character card", async () => {
  render(<Home />);


  const characterCard = await screen.findByText(/Luke Skywalker/i);

  fireEvent.click(characterCard);


  await waitFor(() => {
    const modalHeader = screen.getByText(/Luke Skywalker/i);
    expect(modalHeader).toBeInTheDocument();
  });
});
