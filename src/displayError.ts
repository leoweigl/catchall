import { setVisible } from "./setVisible";

export function displayError(err: Error) {
    const errorText = document.getElementById("errorText");
    const errorSpace = document.getElementById("errorSpace");
    if (errorText instanceof HTMLSpanElement
        && errorSpace instanceof HTMLDivElement
    ) {
        setVisible(errorSpace, true);
        errorText.textContent = "Error: " + err.message;
        setTimeout(() => {
            setVisible(errorSpace, false);
        }, 4000);
    }
}