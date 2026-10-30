import type { OptionGroup } from "../types";

export function chipGroup(optionGroup: OptionGroup): HTMLFieldSetElement {
  const fieldset = document.createElement("fieldset");
  fieldset.className = "min-w-0";

  const optionTitle = document.createElement("legend");
  optionTitle.className = "font-semibold mb-1";
  optionTitle.textContent = optionGroup.title;

  const optionDiv = document.createElement("div");
  optionDiv.className = "flex gap-2 items-center flex-wrap";

  fieldset.append(optionTitle);
  fieldset.append(optionDiv);

  optionGroup.optionValues.forEach((option) => {
    const label = document.createElement("label");
    const chip = document.createElement("input");

    label.className = "px-3 py-2 rounded-xl bg-mist-300 shadow-sm hover:bg-mist-400 hover:cursor-pointer has-checked:bg-mist-700 has-checked:text-slate-100 has-focus-visible:ring-2 has-focus-visible:ring-orange-600";
    label.textContent = option.text;

    chip.id = optionGroup.name;
    chip.className = "sr-only";
    chip.type = "radio";
    chip.name = optionGroup.name;
    chip.value = option.value;

    optionDiv.append(label);
    label.append(chip);
  });

  return fieldset;
}