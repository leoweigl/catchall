import { buildThought } from "./buildThought";
import { saveThought } from "./saveThought";
import { displayError } from "./displayError";

export function handleSubmit(event: SubmitEvent) {
    if (event.currentTarget instanceof HTMLFormElement) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        try {
            const thought = buildThought(data);
            saveThought(thought);
            event.currentTarget.reset();
        } catch (err) {
            if (err instanceof Error) {
                displayError(err);
            }
        }
    }
}