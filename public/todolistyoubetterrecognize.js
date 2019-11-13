import Component from './component.js';
import { ListItem } from './listitemyoubetterrecognize.js';

class ToDoList extends Component {
    onRender(dom){
        //const theList = dom.querySelector('.list');
        let state = this.state;
        this.props.forEach((item) => {
            console.log(item);
            let id = item.id;
            state.id = id;
            state[id] = item; 
            const newListItem = new ListItem(item);
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