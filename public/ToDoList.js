import Component from './component.js';
import { ListItem } from './listItem.js';

class ToDoList extends Component {
    onRender(dom){
        const theList = document.querySelector('.list');
        this.props.forEach((item) => {
            const newListItem = new ListItem(item);
            const newListItemDOM = newListItem.renderDOM();
            theList.appendChild(newListItemDOM);
        });
    }

    renderHTML(){
        const dom = /*html*/ `
        <ul class = 'list'>
        </ul>`;
        return dom;
    }
}
export default ToDoList;