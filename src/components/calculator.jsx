import React, { useState } from "react";

/**
 * Build a basic calculator with a virtual keypad.
 *
 * Your user should be able to...
 *    1) use the keypad to enter numbers
 *    2) see the number they are entering
 *    3) add or subtract numbers
 *    4) see the result of their operation(s)
 *
 * You may use built-in operators.
 *
 * Don't worry about parentheses or order of operations.
 *
 * A basic UI with no real functionality is provided below.
 *
 * React is imported by default and Typescript is supported.
 *
 * This is not a test of your memorization of the Javascript or React
 * standard library; feel free to ask questions, and we'll try to answer
 * or look things up.
 */

export function Calculator() {
  let [ value, setValue ] = useState(0);
  let [ operator, setOperator ] = useState(null);
  let [ result, setResult ] = useState(0);

  return (
    <div id="container">
      <p
        id="display"
        style={ { backgroundColor: value ? "lightblue" : "lightgray" } }
        data-test-id="display"
      >
        { value || result }
      </p>

      <div id="buttons">
        { /* N U M B E R S */ }
        {
          [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ].map((digit) =>
            <button
              className="squareButton"
              type="button"
              onClick={ () => { setValue(value * 10 + digit); } }
              key={ digit }
            >
              { digit }
            </button>)
        }
        <button
          type="button"
          onClick={ () => {
            setResult(value);
            setOperator("+");
            setValue(0);
          } }
          className="squareButton actionButton"
        >
          +
        </button>
        <button
          type="button"
          onClick={ () => {
            setResult(value);
            setOperator("-");
            setValue(0);
          } }
          className="squareButton actionButton"
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => {
            setResult(result + (operator === "+" ? value : -value));
            setValue(0);
          } }
          className="squareButton"
        >
          =
        </button>
      </div>
    </div>
  );
}
