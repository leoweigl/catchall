export function errorSpace() {
    const errorSpace = document.createElement("div");
    const errorText = document.createElement("span");
    errorSpace.className = "border-2 border-rose-900 duration-100 ease-linear bg-rose-50 text-lg font-semibold flex justify-center rounded-xl px-3 py-1 opacity-0 invisible";
    errorText.className = "text-rose-900";
    errorSpace.id = "errorSpace";
    errorText.id = "errorText";
    errorSpace.append(errorText);
    return errorSpace;
}