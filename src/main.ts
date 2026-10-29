import './style.css'
import { URGENCY, WEIGHT, KIND } from './types';
import { chipGroup } from './components/chip-group';

const optionContainer = document.getElementById("optionContainer");

if (optionContainer == null) {
    throw new Error("no optionContainer found");
}

[URGENCY, WEIGHT, KIND].forEach(group => {
    optionContainer.append(chipGroup(group));
});