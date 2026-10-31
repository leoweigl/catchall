import { KIND, URGENCY, WEIGHT } from "./data/optionGroup";
import type { Kind, OptionGroup, Urgency, Weight } from "./types";

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