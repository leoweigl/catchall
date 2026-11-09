export function header(): HTMLElement {
    const header = document.createElement("header");
    header.className = "flex justify-between py-4 border-b-2 border-mist-600";

    const heading = document.createElement("h1");
    heading.textContent = "catchall";
    heading.className = "text-2xl font-bold";

    header.append(heading);

    return header;
}