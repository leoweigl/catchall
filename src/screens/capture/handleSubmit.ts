import { buildThought } from "./buildThought";
import { saveNewThought } from "../../storage/saveNewThought";
import { displayError } from "../../lib/displayError";
import { displayToast } from "../../lib/displayToast";

export function handleSubmit(event: SubmitEvent) {
    if (event.currentTarget instanceof HTMLFormElement) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try {
            const thought = buildThought(data);
            saveNewThought(thought);
            displayToast("Your thought was saved!", false);
            event.currentTarget.reset();
        } catch (err) {
            if (err instanceof Error) {
                displayError(err);
            }
        }
    }
}