import React from "react";
import { render } from "@testing-library/react";
import Main from "./Main";

describe("Main tests", () => {
  it("should render", () => {
    expect(render(<Main />)).toBeTruthy();
  });
});
