import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Photos from "../controls/Photos";
import User from "../controls/User";
import * as pageActions from "../actions/page";
import * as userActions from "../actions/user";

class App extends Component {
    render() {
        const {user, page} = this.props;
        const {getPhotos} = this.props.pageActions;
        const {handleLogin} = this.props.userActions;

        return (
            <div className='row'>
                <Photos photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} error={page.error}/>
                <User name={user.name} handleLogin={handleLogin} error={user.error}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
