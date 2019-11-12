import Component from './component.js';
import { Header } from './header.js';
import ToDoList from './todolistyoubetterrecognize.js';
import { addToDo } from './domain-api/domain-api.js';
import { getToDo } from './domain-api/domain-api.js';

export class App extends Component {

    async onRender(dom){

        const header = new Header;
        const headerDOM = header.renderDOM();
        document.body.prepend(headerDOM);

        
        const props = await getToDo();
        const mainList = new ToDoList(props);
        const mainListDOM = mainList.renderDOM();
        document.body.appendChild(mainListDOM);
        
        const form = document.querySelector('form');
        form.addEventListener('submit', async() => {
            const formData = new FormData(form);
            await addToDo(formData);
            const newProps = await getToDo();
            mainList.update(newProps);
        });

    }

    renderHTML() {
        const dom = /*html*/ `
            <form>
                <label>I definitely need to do, the wold be dammend and my soul condemned to cold black hell:</label>
                <input type = 'text'>
                <button type = 'submit'>ADD<button>
            </form>
        `;
        return dom;
    }
}