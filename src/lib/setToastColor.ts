export function setToastColor(space: HTMLElement, text: HTMLElement, isErr: boolean) {
    space.classList.toggle("border-rose-900", isErr);
    space.classList.toggle("bg-rose-50", isErr);
    
    space.classList.toggle("border-emerald-900", !isErr);
    space.classList.toggle("bg-emerald-50", !isErr);

    text.classList.toggle("text-rose-900", isErr);
    
    text.classList.toggle("text-emerald-900", !isErr);
}

