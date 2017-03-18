
import * as React from 'react';
import { Link } from 'react-router';

var HomePage = React.createClass({
    getInitialState: function() {
        return { loaded: false };
    },

    componentDidMount: function() {
        this.setState({ loaded: true });
    },

    render: function() {
        var loading = this.state.loaded ? "" : " (loading...)";
        return <div>
            <h2>HomeView {loading}</h2>
            <div><Link to="/about">About</Link></div>
        </div>;
    }
});

export default HomePage;
