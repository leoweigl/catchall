import { optionChips } from "../../components/optionChips";
import { KIND, URGENCY, WEIGHT } from "../../data/optionGroup";
import { loadThoughts } from "../../storage/loadThoughts";

export function reviewScreen(): HTMLDivElement {
    const reviewHeader = document.createElement("h3");
    reviewHeader.textContent = "Review Thoughts";

    const reviewContainer = document.createElement("div");
    reviewContainer.className = "flex flex-col gap-2"
    reviewContainer.append(reviewHeader);

    let thoughts = loadThoughts();

    for (const thought of thoughts) {
        const thoughtCard = document.createElement("div");
        const title = document.createElement("p");
        title.textContent = thought.text;
        title.className = "font-semibold"

        thoughtCard.append(title);

        thoughtCard.append(optionChips(thought));

        thoughtCard.className = ""
        reviewContainer.append(thoughtCard);
    }


    return reviewContainer;
}