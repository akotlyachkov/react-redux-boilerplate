import * as React from "react";
import {Testik} from "../controls/testik";
import {observer} from "mobx-react";

@observer(['store'])
class AboutPage extends React.Component<any, any> {


  handleName = (event) => {
    this.props.store.changeName(event.target.value)
  }

  render() {
    let {name} = this.props.store;
    return (
      <div>
        <h2>About</h2>
        <div>
          <label htmlFor="введите текст:"/>
          <input className="form-control mb-10" type="text" name="name" value={name} onChange={this.handleName}/>
          <div>Введенный текст: "<Testik text={name}/>"</div>
        </div>
      </div>
    );
  }
}

export {AboutPage}