import * as React from "react";
import MasterLayout from "../layouts/master";

export default class NotFoundPage extends React.Component<any, any> {

    render() {

        return (
                <MasterLayout>
                    <div className="row">
                        <h2>404</h2>
                        <p>Ничё не найдено</p>
                    </div>
                </MasterLayout>
        );
    }
};


