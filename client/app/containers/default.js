import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../actions/actions";

class DefaultPage extends Component {

    render() {
        return (
            <div>
                <h2>Index</h2>

            </div>
        );
    }
}
const mapStateToProps = state => ({...state.defaultReducer});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(DefaultPage);