import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card tests", () => {
  it("should render", () => {
    expect(render(<Card />)).toBeTruthy();
  });
});
