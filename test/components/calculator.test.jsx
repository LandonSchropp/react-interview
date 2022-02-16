import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import _ from "lodash";
import React from "react";

import { Calculator } from "../../src/components/calculator";

function clickButton(name) {
  userEvent.click(screen.getByRole("button", { name }));
}

describe("Calculator", () => {
  beforeEach(() => render(<Calculator />));

  it("renders the initial value", () => {
    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });

  it("renders the numbers", () => {
    _.times(10, index => {
      expect(screen.getByRole("button", { name: index.toString() })).toBeTruthy();
    });
  });

  it("renders the operators", () => {
    [ "+", "-", "=" ].forEach(operator => {
      expect(screen.getByRole("button", { name: operator })).toBeTruthy();
    });
  });

  describe("when the use enters a number", () => {

    it("displays the number", () => {
      clickButton("1");
      clickButton("2");
      clickButton("3");

      expect(screen.getByTestId("display")).toHaveTextContent("123");
    });
  });

  describe("when the user enters a number that starts with leading 0's", () => {
    it("displays the number", () => {
      clickButton("0");
      clickButton("0");
      clickButton("1");
      clickButton("2");
      clickButton("3");

      expect(screen.getByTestId("display")).toHaveTextContent("123");
    });
  });

  describe("when the user clicks the plus button", () => {
    it("continues to display the first number", () => {
      clickButton("1");
      clickButton("2");
      clickButton("+");

      expect(screen.getByTestId("display")).toHaveTextContent("12");
    });
  });

  describe("when the user types in a second number after clicking the plus button", () => {
    it("displays the second number", () => {
      clickButton("1");
      clickButton("2");
      clickButton("+");
      clickButton("3");
      clickButton("4");

      expect(screen.getByTestId("display")).toHaveTextContent("34");
    });
  });

  describe("when the user adds two numbers and hits the equals button", () => {
    it("displays the result", () => {
      clickButton("1");
      clickButton("2");
      clickButton("+");
      clickButton("3");
      clickButton("4");
      clickButton("=");

      expect(screen.getByTestId("display")).toHaveTextContent("46");
    });
  });

  describe("when the user clicks the minus button", () => {
    it("continues to display the first number", () => {
      clickButton("3");
      clickButton("4");
      clickButton("-");

      expect(screen.getByTestId("display")).toHaveTextContent("34");
    });
  });

  describe("when the user types in a second number after clicking the plus button", () => {
    it("displays the second number", () => {
      clickButton("3");
      clickButton("4");
      clickButton("-");
      clickButton("1");
      clickButton("2");

      expect(screen.getByTestId("display")).toHaveTextContent("12");
    });
  });

  describe("when the user adds two numbers and hits the equals button", () => {
    it("displays the result", () => {
      clickButton("3");
      clickButton("4");
      clickButton("-");
      clickButton("1");
      clickButton("2");
      clickButton("=");

      expect(screen.getByTestId("display")).toHaveTextContent("22");
    });
  });

  // NOTE: These tests only cover the happy path scenarios in the project spec. In a real-world
  // situation, it'd also be important to test erronous user input as well.
});
