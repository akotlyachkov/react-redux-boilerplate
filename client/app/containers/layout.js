import React, {Component} from "react";
import {Link} from "react-router";
import {bindActionCreators} from "redux";
import * as Actions from "../actions/actions";
import {connect} from "react-redux";

class Layout extends Component {

    render() {
        return (
            <div>
                <h1>Master</h1>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <hr/>
                {this.props.name}
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state => ({...state.defaultReducer});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Layout);