import { optionGroupList } from "../../data/optionGroup";
import { handleSubmit } from "./handleSubmit";

import { captureArea } from "./captureArea";
import { chipGroup } from '../../components/chipGroup';
import { dropItButton } from '../../components/dropItButton';

export function captureForm(): HTMLFormElement {
    const form = document.createElement("form");
    form.className = "flex flex-col gap-2";

    const div = document.createElement("div")

    div.className = "flex flex-col gap-2";

    form.append(captureArea());
    form.append(div);

    optionGroupList.forEach(group => {
        div.append(chipGroup(group, form));
    });

    form.append(dropItButton());

    form.addEventListener("submit", (event: SubmitEvent) => handleSubmit(event));

    return form;
}