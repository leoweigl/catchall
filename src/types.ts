import type { URGENCY, WEIGHT, KIND } from "./data/optionGroup"

export type OptionGroup = {
    title: string,
    name: string,
    optionValues: readonly { value: string, text: string }[]
}

export type Thought = {
    id: string,
    text: string,
    createdAt: string,
    urgency?: Urgency,
    weight?: Weight,
    kind?: Kind
}

export type Urgency = typeof URGENCY.optionValues[number]["value"];
export type Weight = typeof WEIGHT.optionValues[number]["value"];
export type Kind = typeof KIND.optionValues[number]["value"];