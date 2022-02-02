import React from "react";
import { render, screen } from "@testing-library/react";
import ImageCard from "./ImageCard";

it("renders ImageCard component", () => {
  render(<ImageCard url={""} setActiveCard={function (): void {}} />);
  expect(screen.getByRole("img")).toBeInTheDocument()
});
