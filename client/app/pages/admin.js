import  React from "react";
import MasterLayout from "../layouts/master";

export default class AdminPage extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        console.log("Вошли в админку")
    }

    render() {

        return (
                <MasterLayout>
                    <div className="row">
                        <h2>Admin</h2>
                    </div>
                </MasterLayout>
        );
    }
};


