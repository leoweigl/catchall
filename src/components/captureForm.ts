import { URGENCY, WEIGHT, KIND } from '../types';

import { captureArea } from "./captureArea";
import { chipGroup } from './chipGroup';
import { dropItButton } from './dropItButton';

export function captureForm(): HTMLFormElement {
    const form = document.createElement("form");
    form.className = "flex flex-col gap-2 w-full max-w-xl";

    const div = document.createElement("div")

    div.className = "flex flex-col gap-2";

    form.append(captureArea());
    form.append(div);

    [URGENCY, WEIGHT, KIND].forEach(group => {
        div.append(chipGroup(group));
    });

    form.append(dropItButton());

    return form;
}