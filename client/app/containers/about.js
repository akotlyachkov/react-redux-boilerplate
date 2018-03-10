import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../actions/actions";

class AboutPage extends React.Component {
    handleName(e){
        this.props.actions.changeName()
    }
    render() {
        return (
            <div>
                <h2>About</h2>
                <input type="text" name="name"
                       value={this.props.name}
                       onChange={(e)=>this.handleName(e)}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({...state.defaultReducer});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(AboutPage);
