import { setToastColor } from "./setToastColor";
import { setVisible } from "./setVisible";

let hideTimer: ReturnType<typeof setTimeout> | undefined;

export function displayToast(message: string, isErr: boolean) {
    const toastText = document.getElementById("toastText");
    const toastSpace = document.getElementById("toastSpace");

    if (toastText instanceof HTMLSpanElement
        && toastSpace instanceof HTMLDivElement
    ) {
        clearTimeout(hideTimer);
        setToastColor(toastSpace, toastText, isErr);
        setVisible(toastSpace, true);
        toastText.textContent = (isErr ? "Error: " : "") + message;
        hideTimer = setTimeout(() => {
            setVisible(toastSpace, false);
        }, 4000);
    }
}