import { optionGroupList } from "../data/optionGroup";
import { handleSubmit } from "../handleSubmit";

import { captureArea } from "./captureArea";
import { chipGroup } from './chipGroup';
import { dropItButton } from './dropItButton';
import { errorSpace } from "./errorSpace";

export function captureForm(): HTMLFormElement {
    const form = document.createElement("form");
    form.className = "flex flex-col gap-2";

    const div = document.createElement("div")

    div.className = "flex flex-col gap-2";

    form.append(captureArea());
    form.append(div);

    optionGroupList.forEach(group => {
        div.append(chipGroup(group));
    });

    form.append(dropItButton());
    form.append(errorSpace());

    form.addEventListener("submit", (event: SubmitEvent) => handleSubmit(event));

    return form;
}