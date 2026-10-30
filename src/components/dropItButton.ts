export function dropItButton(): HTMLInputElement {
    const dropItButton = document.createElement("input");
    dropItButton.type = "submit";
    dropItButton.value = "Drop it";
    dropItButton.className = "mt-3 font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-xl text-center py-2 shadow-md shadow-mist-400 active:scale-98 duration-75";

    return dropItButton;
}