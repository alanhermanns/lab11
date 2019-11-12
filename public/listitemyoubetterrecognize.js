import Component from './component.js';

export class ListItem extends Component {

    renderHTML(){
        const itemData = this.props;
        const dom = /*html*/`    
        <li>${itemData.name}</li>
        <li>${itemData.body}</li>
        <li>${itemData.done}</li>
        `;
        return dom;
    }
}