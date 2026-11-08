import type { URGENCY, WEIGHT, KIND, DECISION } from "./data/optionGroup"

export type OptionGroup = {
    title: string,
    name: string,
    optionValues: readonly { value: string, text: string }[]
}

export type Thought = {
    id: string,
    text: string,
    createdAt: number,
    urgency?: Urgency,
    weight?: Weight,
    kind?: Kind,
    decision?: Decision,
    closedAt?: number
}

export type Urgency = typeof URGENCY.optionValues[number]["value"];
export type Weight = typeof WEIGHT.optionValues[number]["value"];
export type Kind = typeof KIND.optionValues[number]["value"];
export type Decision = typeof DECISION.optionValues[number]["value"];