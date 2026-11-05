export function toastSpace() {
    const toastSpace = document.createElement("div");
    const toastText = document.createElement("span");
    toastSpace.className = "border-2 duration-100 ease-linear text-lg font-semibold flex justify-center rounded-xl px-3 py-1 opacity-0 invisible";
    toastSpace.id = "toastSpace";
    toastText.id = "toastText";
    toastSpace.append(toastText);
    return toastSpace;
}