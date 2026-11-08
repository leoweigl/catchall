import type { Thought } from "../types";
import { STORAGE_KEY } from "./storageKey";

export function saveThoughtList(thoughts: Thought[]) {
    const data = JSON.stringify(thoughts);
    localStorage.setItem(STORAGE_KEY, data);
}