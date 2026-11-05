import { setVisible } from "./setVisible";

export function displayToast(message: string, isErr: boolean) {
    const toastText = document.getElementById("toastText");
    const toastSpace = document.getElementById("toastSpace");
    
    if (!(toastSpace instanceof HTMLDivElement && toastText instanceof HTMLSpanElement)) {
        throw new Error("invalid textbox");
    }

    if (isErr) {
        toastSpace.classList.add("border-rose-900", "bg-rose-50");
        toastText.classList.add("text-rose-900");
    } else {
        toastSpace.classList.add("border-emerald-900", "bg-emerald-50");
        toastText.classList.add("text-emerald-900");
    }
    
    if (toastText instanceof HTMLSpanElement
        && toastSpace instanceof HTMLDivElement
    ) {
        setVisible(toastSpace, true);
        toastText.textContent = (isErr ? "Error: " : "") + message;
        setTimeout(() => {
            setVisible(toastSpace, false);
        }, 4000);
    }
}