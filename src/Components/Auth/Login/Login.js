import React, { Component } from "react";
import { withRouter , NavLink} from "react-router-dom";
import "./Auth.css"

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  doHandleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  doHandleSubmit = e => {
    e.preventDefault();
    this.props.doLoginUser(this.state);
  };

  render() {
    return (
            <div className='formCenter'>
              <h2>Join Betsee!</h2>
                <div className='pageSwitcher'>
                    <NavLink exact to="/login" activeClassName="pageSwitcher__item--active" className="pageSwitcher__item pageSwitcher__item--active">Login</NavLink>
                    <NavLink exact to="/register" activeClassName="pageSwitcher__item--active" className="pageSwitcher__item">Register</NavLink>
                </div>
                <div>
                    <form className="formFields" onSubmit={this.doHandleSubmit}>
                        <div className='formField'>
                        <label className='formField__label'>Email:</label>
                            <input
                                placeholder='Email'
                                type='text'
                                name='email'
                                value={this.state.email}
                                onChange={this.doHandleInput}
                                className="formField__input"
                                required
                            />
                        </div>
                        <div className='formField'>
                        <label className='formField__label'>Password:</label>
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.doHandleInput}
                                className="formField__input"
                                required
                            />
                        </div>
                        <label className='formField__label'>Having trouble logging in?</label>
                        <div className='formField'>
                            <button type='submit' className="formField__button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
    );
  }
}

export default withRouter(Login);
