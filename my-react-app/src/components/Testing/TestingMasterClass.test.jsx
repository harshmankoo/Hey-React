/**
 * @vitest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import TestingMasterclass from "./MasterClassTesting";
import { test, expect } from "vitest";


test("increments count on click", () => {
  render(<TestingMasterclass/>);

  const btn = screen.getByLabelText("increment-btn");
  fireEvent.click(btn);

  expect(screen.getByTestId("count-display")).toHaveTextContent("1");
});

test("integration flow works", async () => {
  render(<TestingMasterclass />);

  const integrationTab = screen.getByText("Integration");
  fireEvent.click(integrationTab);

  const submitBtn = screen.getByText("Submit");
  fireEvent.click(submitBtn);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});


// STEPS TO RUN THE TESTING FILE


// Create React App
// npx create-react-app testing-app
// cd testing-app

// Install Testing Libraries
// npm install @testing-library/react @testing-library/jest-dom

// Add Your Component File
// src/TestingMasterclass.jsx
//  Paste your code there.

// Create Test File
// src/TestingMasterclass.test.js

// import { render, screen, fireEvent } from "@testing-library/react";
// import TestingMasterclass from "./TestingMasterclass";

// test("increments count on click", () => {
//   render(<TestingMasterclass />);

//   const btn = screen.getByLabelText("increment-btn");
//   fireEvent.click(btn);

//   expect(screen.getByTestId("count-display")).toHaveTextContent("1");
// });

// test("integration flow works", async () => {
//   render(<TestingMasterclass />);

//   const integrationTab = screen.getByText("Integration");
//   fireEvent.click(integrationTab);

//   const submitBtn = screen.getByText("Submit");
//   fireEvent.click(submitBtn);

//   expect(screen.getByText("Loading...")).toBeInTheDocument();
// });
// Run the Test
// npm test
// This will open Jest test runner
//  Your tests will run automatically
// Rule (Important)
// React/Jest automatically detects test files if they are named as .test 


// Run the code’s UI
// npm start