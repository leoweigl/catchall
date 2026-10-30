import type { OptionGroup } from "../types";

export const URGENCY = {
    title: "Urgency",
    name: "urgency",
    optionValues: [
        { value: "now", text: "Now" },
        { value: "soon", text: "Soon" },
        { value: "someday", text: "Someday" },
    ]
} as const satisfies OptionGroup;

export const WEIGHT = {
    title: "Weight",
    name: "weight",
    optionValues: [
        { value: "heavy", text: "Heavy" },
        { value: "medium", text: "On my mind" },
        { value: "light", text: "No big deal" }
    ]
} as const satisfies OptionGroup;

export const KIND = {
    title: "Kind",
    name: "kind",
    optionValues: [
        { value: "idea", text: "Idea" },
        { value: "worry", text: "Worry" },
        { value: "reminder", text: "Reminder" },
        { value: "question", text: "Question" }
    ]
} as const satisfies OptionGroup;

export const optionGroupList: OptionGroup[] = [URGENCY, WEIGHT, KIND];