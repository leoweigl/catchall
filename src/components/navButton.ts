export function navButton(): HTMLAnchorElement {
    const navButton = document.createElement("a");
    navButton.className = "text-orange-900 bg-orange-50 shadow-md shadow-mist-400 hover:bg-orange-900 hover:text-white hover:cursor-pointer px-3 py-1 rounded-xl";

    return navButton;
}