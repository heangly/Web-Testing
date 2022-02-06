import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// test("on initial render, the pay button is disable", async () => {
//   render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);
//   expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
// });

test("if an ammount and note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  // manually add value mimic user add value
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "this is note");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
  expect(await screen.findByRole("button", { name: /request/i })).toBeEnabled();
});
