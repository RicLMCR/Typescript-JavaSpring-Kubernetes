import { render, screen } from "@testing-library/react";
import Header from "./Header";

// Check for title 'Kubernetes App Java'
test("renders learn react link", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Kubernetes App Java/i);
  expect(linkElement).toBeInTheDocument();
});
