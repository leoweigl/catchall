import type { Thought } from "./types"
import { buildThought } from "./buildThought";
import { saveThought } from "./saveThought";
import { displayError } from "./displayError";

export function handleSubmit(event: SubmitEvent) {
    if (event.currentTarget instanceof HTMLFormElement) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let thought: Thought;
        
        try {
            thought = buildThought(data);
        } catch (err) {
            if (err instanceof Error) {
                displayError(err);
            }
        }
        
        // saveThought(thought);
    }
}