import Component from './component.js';
import { Header } from './header.js';
import ToDoList from './todolistyoubetterrecognize.js';
import { addToDo, deleteToDo } from './domain-api/domain-api.js';
import { getToDo } from './domain-api/domain-api.js';

export class App extends Component {

    async onRender(dom){

        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        //const state = this.state;

        const todos = await getToDo();
        
        const mainList = new ToDoList(todos);
        this.state = mainList.state;
        const mainListDOM = mainList.renderDOM();
        dom.appendChild(mainListDOM);
        const form = document.querySelector('form');
        form.addEventListener('submit', async(event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const body = formData.get('body');
            const newToDoThing = await addToDo(name, body);
            //this.state.newToDoThing.id = newToDoThing.id;
            this.state[newToDoThing.id] = newToDoThing;
            console.log(this.state);
            const newProps = this.state;
            // const list = document.querySelector('ul');
            // list.child();
            //const newProps = await getToDo();
            let interProps = Object.values(newProps);
            (interProps).splice(interProps.length - 1, 1);
            mainList.update(interProps);

        });

        window.addEventListener('hashchange', async() => {
            const queryParams = window.location.hash.slice(1);
            const params = new URLSearchParams(queryParams);
            const id = params.get('id');
            await deleteToDo(id);
            delete this.state[id];
            //const newProps = await getToDo();
            const newProps = this.state;
            //this.state = mainList.state;
            //this.props.data = newProps;
            //const newToDos = this.props.data;
            let interProps = Object.values(newProps);

            console.log('newProps', newProps);
            interProps.splice(interProps.length - 1, 1);
            mainList.update(interProps);
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