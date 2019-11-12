import Component from './component.js';

export class ListItem extends Component {

    renderHTML(){
        const itemData = this.props;
        const dom = /*html*/`
        <div> 
            <li>I have to:${itemData.name}</li>
            <li>I got to how?${itemData.body}</li>
            <li>Have I?${itemData.done}</li>
        </div>
        `;
        return dom;
    }
}