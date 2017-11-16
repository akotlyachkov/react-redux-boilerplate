import * as React from "react";
import {connect} from "react-redux";
import {User, Photos} from "../controls";


class App extends React.Component<any,any> {
    render() {
        const {user, page} = this.props;
        return (
            <div className='row'>
                <Photos photos={page.photos} year={page.year}  fetching={page.fetching} error={page.error}/>
                <User name={user.name}  error={user.error}/>
            </div>
        )
    }
}



export default connect()(App)
