import { App } from './app.js';

const app = new App;
const appDOM = app.renderDOM();
document.body.prepend(appDOM);

