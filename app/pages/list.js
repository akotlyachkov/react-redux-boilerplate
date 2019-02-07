import {store} from "../stores/store";
import {actions} from "../actions/actions";
import {Clock} from "../controls/clock";
import {Container} from "flux/utils";
import React, {Component} from "react";

class List extends Component {
  static getStores() {
    return [
      store
    ]
  }

  static calculateState(prevState) {
    return {
      base: store.getState()
    }
  }

  state = {
    itemId: null
  };

  deleteItem = (event) => {
    actions.deleteItem(this.state.itemId)

  };

  changeInput = () => {
    let num = +event.target.value;
    if (Number.isInteger(num))
      this.setState({itemId: num})
  };

  render() {
    let {items} = this.state.base;
    return (
      <div>
        <h2>Items</h2>
        <input type="text" onInput={this.changeInput}/>
        <button onClick={this.deleteItem}>Удалить</button>
        <ul>
          {items.map(item => <li key={item.id}>{item.id} : {item.name}</li>)}
        </ul>
        <Clock/>
      </div>
    );
  }
}

let ListPage = Container.create(List);
export {ListPage}