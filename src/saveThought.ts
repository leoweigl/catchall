import type { Thought } from "./types";

export function saveThought(thought: Thought) {
    let thoughts: Thought[] = [];
    const raw = localStorage.getItem("catchall.thoughts");

    if (raw !== null) {
        thoughts = JSON.parse(raw);
    }

    thoughts.push(thought);

    const data = JSON.stringify(thoughts);

    localStorage.setItem("catchall.thoughts", data);
}