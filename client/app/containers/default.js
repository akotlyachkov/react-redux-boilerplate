import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../actions/actions";
import {Progress} from '../controls/progress'

class DefaultPage extends Component {
    componentDidMount() {
        let {dispatch}=this.props;
        Actions.loadTestData()(dispatch)
    }

    render() {
        return (
            <div>
                <h2>Index</h2>
                <Progress {...this.props}/>
                <div>
                    test: {this.props.test && this.props.test.toString()}

                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
   return {...state.defaultReducer}
}

function mapDispatchToProps (dispatch, props) {
 return {
     dispatch,
     actions: bindActionCreators(Actions, dispatch)
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);