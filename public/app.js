import Component from './component.js';
import { Header } from './header.js';
import ToDoList from './todolistyoubetterrecognize.js';
import { addToDo } from './domain-api/domain-api.js';
import { getToDo } from './domain-api/domain-api.js';

export class App extends Component {

    async onRender(dom){

        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const state = this.state;
        const props = await getToDo();
        console.log(props);
        const mainList = new ToDoList(props, state);
        const mainListDOM = mainList.renderDOM();
        dom.appendChild(mainListDOM);
        
        const form = document.querySelector('form');
        form.addEventListener('submit', async(event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const body = formData.get('body');
            const newToDoThing = await addToDo(name, body);
            this.state.push(newToDoThing.id);
            const newProps = await getToDo();
            mainList.update(newProps);
        });

    }

    renderHTML() {
        const dom = /*html*/ `
        <div>
            <form>
                <label>I definitely need to do, the wold be dammend and my soul condemned to cold black hell:</label>
                <label>Name:</label>
                <input type = 'text' name = 'name'>
                <label>Description:</label>
                <input type = 'text' name = 'body'>
                <button type = 'submit'>ADD</button>
            </form>
        </div>
        `;
        return dom;
    }
}