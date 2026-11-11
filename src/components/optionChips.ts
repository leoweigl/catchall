import { optionGroupList } from "../data/optionGroup";
import type { Thought } from "../types";

export function optionChips(thought: Thought): HTMLDivElement {
  const chips = document.createElement("div");
  chips.className = "flex flex-row gap-4"

  optionGroupList.forEach(oG => {
    const chipText = oG.optionValues.find(oV => oV.value === thought[oG.name])?.text;

    if (chipText !== undefined) {
      const chip = document.createElement("span");
      chip.className = ""
      chip.textContent = chipText;
      chips.append(chip);
    }

  });

  return chips;
}