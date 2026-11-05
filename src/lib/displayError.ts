import { displayToast } from "./displayToast";

export function displayError(err: Error) {
    displayToast(err.message, true);
}