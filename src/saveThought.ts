import { isThoughtList } from "./typeGuards";
import type { Thought } from "./types";

export function saveThought(thought: Thought) {
    let thoughts: Thought[] = [];
    const raw = localStorage.getItem("catchall.thoughts");

    if (raw !== null) {
        const parsed: unknown = JSON.parse(raw);

        if (isThoughtList(parsed)) {
            thoughts = parsed;
        } else {
            throw new Error("Loaded data is invalid");
        }
    }

    thoughts.push(thought);

    const data = JSON.stringify(thoughts);
    
    localStorage.setItem("catchall.thoughts", data);
}