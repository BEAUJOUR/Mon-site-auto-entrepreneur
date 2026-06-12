import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the current site navigation", () => {
  render(<App />);
  expect(screen.getAllByText(/accueil/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/services/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/contact/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/estimer mon projet/i).length).toBeGreaterThan(0);
});
