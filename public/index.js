import { App } from './App.js';

const app = new App;
const appDOM = app.renderDOM();
document.body.prepend(appDOM);

