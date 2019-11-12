import Component from './component.js';

export class ListItem extends Component {

    renderHTML(){
        const itemData = this.props;
        const dom = /*html*/`
        <div> 
            <li>${itemData.name}</li>
            <li>${itemData.body}</li>
            <li>${itemData.done}</li>
        </div>
        `;
        return dom;
    }
}