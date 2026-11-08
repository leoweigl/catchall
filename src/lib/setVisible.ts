export function setVisible(element: HTMLElement, visible: boolean) {
    element.classList.toggle("opacity-0", !visible);
    element.classList.toggle("invisible", !visible);
}