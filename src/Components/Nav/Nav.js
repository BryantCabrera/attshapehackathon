import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  state = {
    loggedIn: false,
  };

  handleSubmit = () => {
    this.props.history.push(`/live-match`);
  };

  render() {
    const search = (
      <div style={{ paddingLeft: "20px"}}>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <button className="search__button"><i className="fa fa-search"/></button>
            <input type="text" placeholder="Search" className="search__form--input"/>
          </form>
        </div>
      </div>
    );

    return (
      <div className="nav">
        <img src="/betsee.svg" alt="Logo" />
        <Link to="/" className="nav__link">
          Browse
        </Link>
        {this.props.loggedUser._id ? 
          <Link to="/:id/wallet" className="nav__link">
            Earnings
          </Link>
          :
          null
        }
        {search}
        {this.props.loggedUser._id ? 
          <nav className="nav__logging" >
            <Link to="/" className="nav__link" onClick={() => this.props.doLogoutUser()}>
              Logout
            </Link>
          </nav>
          :
          <nav className="nav__logging">
            <Link to="/login" className="nav__link">
              Login
            </Link>
            <Link to="/register" className="nav__link">
              Register
            </Link>
          </nav>
        }
      </div>
    );
  }
}

export default withRouter(Nav);
