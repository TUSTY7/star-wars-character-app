import { render, screen } from "@testing-library/react";
import CharacterCard from "../components/CharacterCard";

test("renders character name", () => {
  render(<CharacterCard character={{ name: "Luke Skywalker" }} />);
  const nameElement = screen.getByText(/Luke Skywalker/i);
  expect(nameElement).toBeInTheDocument();
});
