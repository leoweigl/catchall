export function setVisible(element: HTMLElement, visible: boolean) {
    if (element instanceof HTMLElement) {
        if (visible) {
            element.classList.remove("opacity-0");
            element.classList.toggle("invisible", false);
        } else {
            element.classList.add("opacity-0");
            element.classList.toggle("invisible", true);
        }
        return;
    }
}