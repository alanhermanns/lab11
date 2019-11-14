import Component from './component.js';
import { ListItem } from './listitemyoubetterrecognize.js';

class ToDoList extends Component {
    onRender(dom){
        //const theList = dom.querySelector('.list');
        let props = this.props;
        props = props.reduce((acc, curr) => {
            if (curr !== acc[acc.length - 1 ]) {
                acc.push(curr);
                return acc;
            } else {
                return acc;
            }
        }, []);
        let state = this.state;
        props.forEach((item) => {
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