import React, { Component } from 'react';
import axios from 'axios';
class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
          input: {},
          errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      let input = this.state.input;
      input[event.target.name] = event.target.value;
    
      this.setState({
        input
      });
    }
    handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["name"] = "";
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
  
        alert('Demo Form is submited');
    }
  }
  
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!input["confirm_password"]) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
      if (input["password"] != input["confirm_password"]) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    } 

    this.setState({
      errors: errors
    });

    return isValid;
}

    postProduct = (e) => {
      let newUser = {
        name: this.state.name,
        email: this.state.email,
        user: this.state.user,
        password: this.state.password,
        bio: this.state.bio,
        location: this.state.location,
      }
        console.log(newUser);
        axios({
            method: 'POST',
            url: 'https://data-json-server.herokuapp.com/api/users',
            data: newUser
        }).then((item) => {console.log(item)});
    }
    render() {
        return (
            <React.StrictMode>
            <h2 className="h5 text-uppercase mb-4">Registration Account</h2>
        <div className="row">
        <form onSubmit={(event) => this.handleSubmit()}>
          <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="firstName">Your name</label>
                  <input className="form-control form-control-lg" ref="name" id="firstName" type="text" placeholder="Enter your first name" value={this.state.input.name}
              onChange={this.handleChange}/>
              <div className="text-danger">{this.state.errors.name}</div>
                </div>
                
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="email">Email address</label>
                  <input className="form-control form-control-lg" refs="email" id="email" type="email" placeholder="e.g. Jason@example.com" value={this.state.input.email}
              onChange={this.handleChange}/>
        <div className="text-danger">{this.state.errors.email}</div>
                </div>
                <div className="col-lg-12 form-group">
                  <label className="text-small text-uppercase" htmlFor="phone">User name</label>
                  <input className="form-control form-control-lg" id="phone" type="text"  placeholder="e.g. Duong Cute" value={this.state.user} onChange={(e)=>this.setState({user:e.target.value})}/> 
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="company">Password</label>
                  <input className="form-control form-control-lg" id="company" type="password" placeholder="Your password" value={this.state.input.password}
              onChange={this.handleChange}/>
              <div className="text-danger">{this.state.errors.password}</div>
          
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase" htmlFor="company">Confirm password</label>
                  <input className="form-control form-control-lg" id="company" type="password" placeholder="Confirm your password" value={this.state.input.confirm_password}
              onChange={this.handleChange}/><div className="text-danger">{this.state.errors.confirm_password}</div>
                </div>
                <div className="col-lg-12 form-group">
                  <label className="text-small text-uppercase" htmlFor="address">bio</label>
                  <input className="form-control form-control-lg" id="address" type="text" placeholder="What do you want to us know ?" value={this.state.input.bio}
              onChange={this.handleChange}/>
                </div>
                <div className="col-lg-12 form-group">
                  <label className="text-small text-uppercase" htmlFor="city">Location</label>
                  <input className="form-control form-control-lg" id="city" type="text" value={this.state.input.location}
              onChange={this.handleChange}/>
                </div>
                
                <div className="col-lg-12 form-group">
                  <div className="custom-control custom-checkbox">
                    <input className="custom-control-input" id="alternateAddressCheckbox" type="checkbox" />
                    <label className="custom-control-label text-small" htmlFor="alternateAddressCheckbox">Check here to let us know you have agreed to our terms for the full amount</label>
                  </div>
                </div>
                <div className="col-lg-12 form-group">
                  <button className="btn btn-dark" type="submit">Finish</button>
                </div>
              </div>
          </div>
          </form>
        </div>
        </React.StrictMode>
        );
    }
}

export default Registration;