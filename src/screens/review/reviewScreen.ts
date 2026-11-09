export function reviewScreen(): HTMLDivElement {
    const reviewHeader = document.createElement("h3");
    reviewHeader.textContent = "Review Thoughts";

    const reviewContainer = document.createElement("div");
    reviewContainer.append(reviewHeader);


    return reviewContainer;
}