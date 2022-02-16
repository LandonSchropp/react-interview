import { render, screen } from "@testing-library/react";
import _ from "lodash";
import React from "react";

import { Calculator } from "../../src/components/calculator";

describe("Calculator", () => {
  beforeEach(() => render(<Calculator />));

  it("renders the initial value", () => {
    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });

  it("renders the numbers", () => {
    _.times(10, index => {
      expect(screen.getByRole("button", { name: index })).toBeTruthy();
    });
  });

  it("renders the operators", () => {
    [ "+", "-", "=" ].forEach(operator => {
      expect(screen.getByRole("button", { name: operator })).toBeTruthy();
    });
  });
});
