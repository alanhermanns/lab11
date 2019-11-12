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

        
        const props = await getToDo();
        console.log(props);
        const mainList = new ToDoList(props);
        const mainListDOM = mainList.renderDOM();
        dom.appendChild(mainListDOM);
        
        const form = document.querySelector('form');
        form.addEventListener('submit', async(event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const body = formData.get('body');
            await addToDo(name, body);
            const newProps = await getToDo();
            mainList.update(newProps);
        });

    }

    renderHTML() {
        const dom = /*html*/ `
            <form>
                <label>I definitely need to do, the wold be dammend and my soul condemned to cold black hell:</label>
                <label>Name:</label>
                <input type = 'text' name = 'name'>
                <label>Description:</label>
                <input type = 'text' name = 'body'>
                <button type = 'submit'>ADD</button>
            </form>
        `;
        return dom;
    }
}