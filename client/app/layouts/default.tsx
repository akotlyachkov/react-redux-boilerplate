import * as React from "react";
import {connect} from "react-redux";
import {User, Photos} from "../controls";


class App extends React.Component<any,any> {
    render() {
        const {user, page} = this.props;
        return (
            <div className='row'>
                <Photos photos={page.photos} year={page.year} getPhotos={(n:number)=>console.log(1)}  fetching={page.fetching} error={page.error}/>
                <User name={user.name}  error={user.error}/>
            </div>
        )
    }
}



export default connect()(App)
