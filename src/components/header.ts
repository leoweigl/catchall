export function header(): HTMLElement {
    const header = document.createElement("header");
    header.className = "flex justify-between py-4";

    const heading = document.createElement("h1");
    heading.textContent = "catchall";
    heading.className = "text-2xl font-bold";

    const navButton = document.createElement("button");
    navButton.type = "button";
    navButton.className = "text-orange-900 bg-orange-50 shadow-md shadow-mist-300 hover:bg-orange-900 hover:text-white hover:cursor-pointer px-3 py-1 rounded-xl";
    navButton.textContent = "Review";

    header.append(heading);
    header.append(navButton);

    return header;
}