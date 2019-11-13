import Component from './component.js';
//import { deleteToDo } from './domain-api/domain-api.js';
export class ListItem extends Component {
    onRender(dom){
        //const state = this.state;
        const doneButton = dom.querySelector('.done');
        //const oneToDo = dom.querySelector('.thing-to-do');
        doneButton.addEventListener('click', () => {
            const queryString = window.location;
            const queryParams = new URLSearchParams(queryString);
            const id = event.target.value;
            queryParams.set('id', id);
        });            
        
    }


    renderHTML(){
        const itemData = this.props;
        const dom = /*html*/`
        <div class ='thing-to-do'> 
           <button class='done' value = ${itemData.id}>It's Done.</button> <li>I have to ${itemData.name}</li>
           <li>I got to how? ${itemData.body}</li>
           <li>Have I? ${itemData.done}</li>
        </div>
        `;
        return dom;
    }
}