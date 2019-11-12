import Component from './component.js';
import { Header } from './header.js';
import { ToDoList } from './todolist.js';

export class App extends Component {

    onRender(dom){
        const header = new Header;
        const headerDOM = header.renderDOM();
        document.body.prepend(headerDOM);
        const props = 
        const mainList = new ToDoList;
    }
}