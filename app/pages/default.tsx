import * as React from "react";
import {Progress} from '../controls/progress'
import {Clock} from "../controls/clock";
import {observer} from "mobx-react";

@observer(['store'])
class DefaultPage extends React.Component<any, any> {
  state = {
    base: null
  }

  componentDidMount() {
    this.props.store.loadTestData()
  }

  render() {
    let {progress, status } = this.props.store;
    return (
      <div>
        <h2>Index <Progress progress={progress}/></h2>
        <div>
          test: {status}
        </div>
        <Clock/>
      </div>
    );
  }
}

export {DefaultPage}
