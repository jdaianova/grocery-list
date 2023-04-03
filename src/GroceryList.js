import { Component } from 'react';
import foodIcon from './img/food-icon.png';

export default class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(event) {
        this.setState({ userInput: event });
    }

    addItem(item) {
        if (item === '') { return };
        let listArray = this.state.groceryList;
        listArray.push(item);
        this.setState({ groceryList: listArray, userInput: '' });
    }

    crossedItem(e) {
        const item = e.target;
        item.classList.toggle('crossed');
    }

    clearList() {
        this.setState({ groceryList: [] });
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        placeholder='New product...'
                        type='text'
                        onChange={(e) => { this.onChangeEvent(e.target.value) }}
                        value={this.state.userInput}
                    />
                </div>

                <div>
                    <button
                        className='add-btn'
                        onClick={() => { this.addItem(this.state.userInput) }}>
                        + Add to list
                    </button>
                </div>

                <div>
                    <button
                        className='clear-btn'
                        onClick={() => { this.clearList() }}>
                        Clear all
                    </button>
                </div>

                <div className='list'>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li
                                onClick={this.crossedItem} key={index}>
                                <img src={foodIcon} width='20px' />
                                &nbsp;
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>



            </div>
        )
    }
}