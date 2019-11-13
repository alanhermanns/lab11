import Component from './component.js';
import { ListItem } from './listitemyoubetterrecognize.js';

class ToDoList extends Component {
    onRender(dom){
        //const theList = dom.querySelector('.list');
        const state = this.props.state;
        this.props.forEach((item) => {
            console.log(item);
            const newListItem = new ListItem(item, state);
            const newListItemDOM = newListItem.renderDOM();
            dom.appendChild(newListItemDOM);
        });
    }

    renderHTML(){
        const dom = /*html*/ `
        <ul class='list'>
        </ul>`;
        return dom;
    }
}
export default ToDoList;