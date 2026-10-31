import { isKind, isUrgency, isWeight } from "./typeGuards";
import type { Thought, Urgency } from "./types";

export function buildThought(data: FormData): Thought {
    const text = data.get("thought");
    const urgency = data.get("urgency");
    const weight = data.get("weight");
    const kind = data.get("kind");

    if (typeof text !== "string" || text.length == 0) {
        throw Error("Thought can't be empty.");
    }
    
    return {
        id: crypto.randomUUID(),
        text: text,
        createdAt: Date.now().toString(),
        urgency: isUrgency(urgency) ? urgency : undefined,
        weight: isWeight(weight) ? weight : undefined,
        kind: isKind(kind) ? kind : undefined
    };
}