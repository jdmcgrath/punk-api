import React from "react";
import { render } from "@testing-library/react";
import FilterItem from "./FilterItem";

describe("FilterItem tests", () => {
  it("should render", () => {
    expect(render(<FilterItem />)).toBeTruthy();
  });
});
