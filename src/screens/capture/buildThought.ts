import { isKind, isUrgency, isWeight } from "../../lib/typeGuards";
import type { Thought } from "../../types";

export function buildThought(data: FormData): Thought {
    const text = data.get("thought");
    const urgency = data.get("urgency");
    const weight = data.get("weight");
    const kind = data.get("kind");

    if (typeof text !== "string" || text.trim().length === 0) {
        throw new Error("Thought can't be empty.");
    }
    
    return {
        id: crypto.randomUUID(),
        text: text,
        createdAt: Date.now(),
        urgency: isUrgency(urgency) ? urgency : undefined,
        weight: isWeight(weight) ? weight : undefined,
        kind: isKind(kind) ? kind : undefined
    };
}