import React from "react";
import { render } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList tests", () => {
  it("should render", () => {
    expect(render(<CardList />)).toBeTruthy();
  });
});
