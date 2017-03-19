import * as React from "react";
import { Link } from 'react-router'

export default class Navbar extends React.Component<any, any> {
    render() {
        return (
            <div className="row">
                <ul className="nav nav-pills">
                    <li role="presentation" className="active"><Link to="/">Home</Link></li>
                    <li role="presentation"><Link to="/user">User</Link></li>
                    <li role="presentation"><Link to="/photos">Photos</Link></li>
                </ul>
            </div>
        )
    }
}
