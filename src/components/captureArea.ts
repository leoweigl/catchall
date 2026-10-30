export function captureArea(): HTMLLabelElement {
    const label = document.createElement("label");
    const captureArea = document.createElement("textarea");
    const span = document.createElement("span")

    captureArea.name = "thoughts";
    captureArea.placeholder = "what's on your mind?";
    captureArea.className = "resize-none shadow-md font-semibold shadow-mist-300 bg-orange-50 text-slate-900 rounded-xl p-4 w-full h-32 overflow-auto";

    span.textContent = "Your thoughts";
    span.className = "sr-only"

    label.append(captureArea);
    label.append(span);

    return label;
}