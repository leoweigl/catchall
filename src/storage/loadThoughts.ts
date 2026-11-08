import { isThoughtList } from "../lib/typeGuards";
import type { Thought } from "../types";
import { STORAGE_KEY } from "./storageKey";

export function loadThoughts(): Thought[] {
    let thoughts: Thought[] = [];

    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw !== null) {
        const parsed: unknown = JSON.parse(raw);

        if (isThoughtList(parsed)) {
            thoughts = parsed;
        } else {
            throw new Error("Loaded data is invalid");
        }
    }
    
    return thoughts;
}