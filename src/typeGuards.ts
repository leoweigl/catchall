import { KIND, URGENCY, WEIGHT } from "./data/optionGroup";
import type { Kind, OptionGroup, Urgency, Weight, Thought } from "./types";

export function isUrgency(value: unknown): value is Urgency {
    return isOptionValue(value, URGENCY);
}

export function isWeight(value: unknown): value is Weight {
    return isOptionValue(value, WEIGHT);
}

export function isKind(value: unknown): value is Kind {
    return isOptionValue(value, KIND);
}

function isOptionValue(value: unknown, optionGroup: OptionGroup) {
    return optionGroup.optionValues.some(o => o.value === value);
}

export function isThoughtList(value: unknown): value is Thought[] {
    if (!Array.isArray(value)) {
        return false;
    }

    return value.every(isThought);
}

function isThought(value: unknown): value is Thought {
    if (value === null || typeof value !== "object") {
        return false;
    }

    if (!("id" in value) || typeof value.id !== "string") {
        return false;
    }

    if (!("text" in value) || typeof value.text !== "string") {
        return false;
    }

    if (!("createdAt" in value) || typeof value.createdAt !== "number") {
        return false;
    }

    if ("urgency" in value && !isUrgency(value.urgency)) {
        return false;
    }

    if ("weight" in value && !isWeight(value.weight)) {
        return false;
    }

    if ("kind" in value && !isKind(value.kind)) {
        return false;
    }

    return true;
}