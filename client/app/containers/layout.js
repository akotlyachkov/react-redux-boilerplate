import React from "react";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const Layout = props=> {
    return (
      <div>
        <h1>Master</h1>
        <div>
          <Link to="/">Главная</Link>
          <Link to="/about">About</Link>
        </div>
        <hr/>
        {this.props.children}
      </div>
    );
};

export {Layout}