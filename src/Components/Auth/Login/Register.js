import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./Auth.css"

class Register extends Component {
  state = {
    email: "",
    name: "",
    password: "",
  };

  doHandleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  doHandleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
    };

    try {
      const loginResponse = await fetch(
        `${process.env.REACT_APP_API_URL}/users`,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!loginResponse.ok) {
        throw Error(loginResponse.statusText);
      }
      const parseResponse = await loginResponse.json();
      if (parseResponse.message === "Registration successful.") {
        this.props.history.push(`/`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
           <div className='formCenter'>
                {/* <img id="relocater-logo" src="./logo.png" alt="Relocater Logo" title="Relocater Logo"></img> */}
                <h2>Join Betsee!</h2>
                <div className='pageSwitcher'>
                <NavLink exact to="/login" activeClassName="pageSwitcher__item--active" className="pageSwitcher__item">Login</NavLink>
                <NavLink exact to="/register" activeClassName="ageSwitcher__item--active" className="pageSwitcher__item pageSwitcher__item--active">Register</NavLink>
                </div>
                <form onSubmit={this.doHandleSubmit} className='formFields'>
                    <div className='formField'>
                        <label className='formField__label'>Username:</label>
                        <input
                        type='text'
                        placeholder='Enter your name!'
                        name='name'
                        value={this.state.name}
                        onChange={this.doHandleInput}
                        className="formField__input"
                        />
                    </div>

                    <div className='formField'>
                        <label className='formField__label'>Email:</label>
                        <input
                        type='email'
                        placeholder='Enter your email!'
                        name='email'
                        value={this.state.email}
                        onChange={this.doHandleInput}
                        className="formField__input"
                        />
                    </div>

                    <div className='formField'>
                        <label className='formField__label'>Password:</label>
                        <input
                        type='password'
                        placeholder='Enter your password!'
                        name='password'
                        value={this.state.password}
                        onChange={this.doHandleInput}
                        className="formField__input"
                        />
                    </div>

                    <div className='formField'>
                        <button className="formField__button">Sign Up</button>
                    </div>
                </form>
            </div>
    );
  }
}

export default withRouter(Register);
