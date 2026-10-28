export type Urgency = "now" | "soon" | "someday";
export type Weight = "heavy" | "medium" | "light";
export type Kind = "idea" | "worry" | "reminder" | "question";

export type ChipOptionValue = Urgency | Weight | Kind

export type Option = {
    value: ChipOptionValue,
    text: string
};