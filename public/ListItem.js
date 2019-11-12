import Component from './component.js';

export class ListItem extends Component {

    renderHTML(itemData){
        const dom = /*html*/`    
        <li>${itemData.name}</li>
        <li>${itemData.body}</li>
        <li>${itemData.done}</li>
        `;
        return dom;
    }
}