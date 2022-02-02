import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("renders SearchBar component", () => {
  beforeEach(() => {
    render(<SearchBar setCards={function (): void {}} />);
  })
  it("should render text input", () => {
    expect(screen.getByPlaceholderText(/Enter your query/i)).toBeInTheDocument();
  });
  it("should render submit button", () => {
    expect(screen.getByDisplayValue(/Search/i)).toBeInTheDocument();
  });
});
