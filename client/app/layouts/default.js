import  React from "react";

import {User, Photos} from "../controls";


class App extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const {user, page} = this.props;
        return (
            <div className='row'>
                <Photos photos={page.photos} year={page.year} getPhotos={(n)=>console.log(1)}  fetching={page.fetching} error={page.error}/>
                <User name={user.name}  error={user.error}/>
            </div>
        )
    }
}



export default App
