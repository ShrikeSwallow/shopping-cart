import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../components/ErrorPage";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<ErrorPage />);
    expect(screen.getByRole("heading").textContent).toMatch(/Oops/i);
  });
});
