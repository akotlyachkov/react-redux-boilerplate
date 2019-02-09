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
        <div className="d-flex">
          <input className="form-control mr-15" type="text" onInput={this.changeInput}/>
            <button className="btn btn-info" onClick={this.deleteItem}>Удалить</button>
        </div>

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