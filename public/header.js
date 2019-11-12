import Component from './component.js';

export class Header extends Component {

    renderHTML(){
        const dom = /*html*/ `
        <div>
            <h1>Life Listed as a Series of Tasks</h1>
        </div>`;
        return dom;
    }
}