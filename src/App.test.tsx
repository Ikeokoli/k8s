import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";
import "./test/setup";

describe("Cluster Rollout Console", () => {
  it("renders the rollout queue and connection status", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Service rollouts" })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "Review" })).toHaveLength(5);
  });
  it("filters the table by environment", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.selectOptions(screen.getByRole("combobox", { name: "Environment" }), "Development");
    const table = screen.getByRole("table", { name: "Active service rollouts" });
    expect(within(table).getByText("notification-worker")).toBeInTheDocument();
    expect(within(table).queryByText("checkout-api")).not.toBeInTheDocument();
  });
  it("opens the selected rollout in the decision desk", async () => {
    const user = userEvent.setup();
    render(<App />);
    const row = screen.getByText("checkout-api").closest("tr");
    await user.click(within(row!).getByRole("button", { name: "Review" }));
    expect(within(screen.getByRole("complementary", { name: "Rollout review" })).getByRole("heading", { name: "checkout-api" })).toBeInTheDocument();
  });
});
