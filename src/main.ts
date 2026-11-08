import './style.css'

import { captureForm } from './screens/capture/captureForm';
import { header } from './components/header';
import { toastSpace } from './components/toastSpace';

const app = document.getElementById("app");
const main = document.createElement("main");
main.className = "w-full md:max-w-xl lg:max-w-3xl";

if (app instanceof HTMLBodyElement) {
    app.className = "flex flex-col items-center px-6 bg-mist-200 text-black";
    app.append(header())
    app.append(main);
    main.append(captureForm());
    main.append(toastSpace());
}