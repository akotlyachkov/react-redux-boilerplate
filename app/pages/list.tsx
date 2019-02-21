import {Clock} from "../controls/clock";
import * as React from "react";
import {observer} from "mobx-react";

@observer(['store'])
class ListPage extends React.Component<any, any> {
  state = {
    itemId: null
  };

  deleteItem = () => {
    this.props.store.deleteItem(this.state.itemId)
  };

  changeInput = (event) => {
    let num = +event.target.value;
    if (Number.isInteger(num))
      this.setState({itemId: num})
  };

  render() {
    let {items} = this.props.store;
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

export {ListPage}