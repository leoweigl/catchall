import { buildThought } from "./buildThought";
import { saveThought } from "../../data/saveThought";
import { displayError } from "../../lib/displayError";
import { displayToast } from "../../lib/displayToast";

export function handleSubmit(event: SubmitEvent) {
    if (event.currentTarget instanceof HTMLFormElement) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try {
            const thought = buildThought(data);
            saveThought(thought);
            displayToast("Your thought was saved!", false);
            event.currentTarget.reset();
        } catch (err) {
            if (err instanceof Error) {
                displayError(err);
            }
        }
    }
}