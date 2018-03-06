import React from "react";
import MasterLayout from "../layouts/master";

export default class ErrorPage extends React.Component {
    componentDidMount() {
        console.log("Вошли в ошибку")
    }

    render() {

        return (
            <MasterLayout>
                <div className="row">
                    <h2>Ошибка на сервере</h2>
                </div>
            </MasterLayout>
        );
    }
};


