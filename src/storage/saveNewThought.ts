import type { Thought } from "../types";
import { loadThoughts } from "./loadThoughts";
import { saveThoughtList } from "./saveThoughtList";

export function saveNewThought(thought: Thought) {
    let thoughts: Thought[] = loadThoughts();
    thoughts.push(thought);

    saveThoughtList(thoughts);
}