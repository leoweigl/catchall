import './style.css'

import { toastSpace } from './components/toastSpace';
import { header } from './components/header';
import { navButton } from './components/navButton';
import { REVIEW_ROUTE, CAPTURE_ROUTE } from './data/routes';
import { captureForm } from './screens/capture/captureForm';
import { reviewScreen } from './screens/review/reviewScreen';

const body = document.body;
const shell = document.createElement("div");
shell.className = "w-full md:max-w-xl lg:max-w-3xl flex flex-col gap-4"
const nav = navButton();
const main = document.createElement("main");
const appHeader = header();

body.append(shell);
appHeader.append(nav);
shell.append(appHeader, main, toastSpace());

function switchView() {
    const hash = location.hash;

    if (hash === REVIEW_ROUTE.hash) {
        nav.href = CAPTURE_ROUTE.hash;
        nav.textContent = CAPTURE_ROUTE.text;

        main.replaceChildren(reviewScreen());
    } else {
        nav.href = REVIEW_ROUTE.hash;
        nav.textContent = REVIEW_ROUTE.text;

        main.replaceChildren(captureForm());
    }
}

switchView();

window.addEventListener("hashchange", switchView);