import Component from './component.js';

export class ListItem extends Component {
    onRender(dom){
        const doneButton = dom.querySelector('.done');
        const oneToDo = dom.querySelector('.thing-to-do');
        doneButton.addEventListener('click', () => {
            oneToDo.classList.addClass('hidden');
        });            
        
    }


    renderHTML(){
        const itemData = this.props;
        const dom = /*html*/`
        <div class ='thing-to-do'> 
           <button class='done'>It's Done.</button> <li>I have to ${itemData.name}</li>
           <li>I got to how? ${itemData.body}</li>
           <li>Have I? ${itemData.done}</li>
        </div>
        `;
        return dom;
    }
}