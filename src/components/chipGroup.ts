import type { OptionGroup } from "../types";

export function chipGroup(optionGroup: OptionGroup, form: HTMLFormElement): HTMLFieldSetElement {
  let lastChecked: string | null = null;
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

    label.className = "duration-75 flex items-center px-3 py-1 rounded-xl bg-mist-300 shadow-sm shadow-mist-400 hover:bg-mist-400 hover:cursor-pointer has-checked:bg-mist-700 has-checked:text-mist-50 has-focus-visible:ring-2 has-focus-visible:ring-orange-600";
    label.textContent = option.text;

    chip.id = option.value;
    chip.className = "sr-only";
    chip.type = "radio";
    chip.name = optionGroup.name;
    chip.value = option.value;

    chip.addEventListener("click", () => {
      if (lastChecked === chip.value) {
        chip.checked = false;
        lastChecked = null;
      } else {
        lastChecked = chip.value;
      }
    });

    optionDiv.append(label);
    label.append(chip);
  });

  form.addEventListener("reset", () => {
    lastChecked = null;
  });

  return fieldset;
}