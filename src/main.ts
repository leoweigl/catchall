import './style.css'

import { captureForm } from './components/captureForm';
import { header } from './components/header';

const app = document.getElementById("app");
const main = document.createElement("main");
main.className = "flex justify-center";

app?.append(header());
app?.append(main);
main?.append(captureForm());