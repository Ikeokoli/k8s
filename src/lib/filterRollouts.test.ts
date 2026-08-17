import { describe, expect, it } from "vitest";
import { initialRollouts } from "../data/rollouts";
import { filterRollouts } from "./filterRollouts";

describe("filterRollouts", () => {
  it("returns all rollouts for the All option", () => {
    expect(filterRollouts(initialRollouts, "All")).toHaveLength(initialRollouts.length);
  });
  it("returns only matching environments", () => {
    expect(filterRollouts(initialRollouts, "Production").every((item) => item.environment === "Production")).toBe(true);
  });
});
