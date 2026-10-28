import type { Option } from "../types";

export function chipGroup(title: string, name: string, options: Option[]): HTMLFieldSetElement {


    let s = `<fieldset class="min-w-0">

        <div class="flex flex-col gap-2">

          <p class="font-semibold">Weight</p>

          <div class="flex gap-2 items-center flex-wrap">

            <label
              class="px-3 py-2 rounded-xl bg-mist-300 hover:bg-mist-400 hover:cursor-pointer has-checked:bg-mist-500 has-checked:text-slate-100 has-focus-visible:ring-2 has-focus-visible:ring-orange-600">
              <input type="radio" name="weight" value="heavy" class="sr-only">
              Heavy
            </label>

            <label
              class="px-3 py-2 rounded-xl bg-mist-300 hover:bg-mist-400 hover:cursor-pointer has-checked:bg-mist-500 has-checked:text-slate-100 has-focus-visible:ring-2 has-focus-visible:ring-orange-600">
              <input type="radio" name="weight" value="medium" class="sr-only">
              On my mind
            </label>

            <label
              class="px-3 py-2 rounded-xl bg-mist-300 hover:bg-mist-400 hover:cursor-pointer has-checked:bg-mist-500 has-checked:text-slate-100 has-focus-visible:ring-2 has-focus-visible:ring-orange-600">
              <input type="radio" name="weight" value="light" class="sr-only">
              No big deal
            </label>

          </div>

        </div>

      </fieldset>`

    const fieldset = document.createElement("fieldset");
    fieldset.className = "min-w-0";

    const div = document.createElement("div");
    div.className = "flex flex-col gap-2";

    fieldset.append(div)

    return fieldset;
}