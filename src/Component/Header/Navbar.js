import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Detail from '../Content/Detail';
import Trending from '../Content/Trending';
import Registration from '../Content/Registration'
import ItemCard from '../Content/Item_card';
class Navbar extends Component {
    render() {
        return (
            <Route>
            <React.Fragment>
                
                <header className="header bg-white">
            <div className="container px-0 px-lg-3">
              <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><a className="navbar-brand" href="index.html"><span className="font-weight-bold text-uppercase text-dark">Boutique</span></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link active"><Link to ="/">Home</Link></a>
                    </li>
                    <li className="nav-item">
                     <a className="nav-link"><Link to ="/trending">Shop</Link></a>
                    </li>
                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" id="pagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                      <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown"><a className="dropdown-item border-0 transition-link" href="index.html">Homepage</a><a className="dropdown-item border-0 transition-link" href="shop.html">Category</a><a className="dropdown-item border-0 transition-link" href="detail.html">Product detail</a><a className="dropdown-item border-0 transition-link" href="cart.html">Shopping cart</a><a className="dropdown-item border-0 transition-link" href="checkout.html">Checkout</a></div>
                    </li>
                  </ul>
                  <ul className="navbar-nav ml-auto">               
                    <li className="nav-item"><a className="nav-link"><i className="fas fa-dolly-flatbed mr-1 text-gray" /> <Link to ="/card">Cart</Link><small className="text-gray">(2)</small></a></li>
                    <li className="nav-item"><a className="nav-link" href="#"> <i className="far fa-heart mr-1" /><small className="text-gray"> (0)</small></a></li>
                    <li className="nav-item"><a className="nav-link" href="#"> <i className="fas fa-user-alt mr-1 text-gray" /><Link to ="/registration">Login</Link></a></li>
                  </ul>
                </div>
              </nav>
                    <Switch>
                <Route exact path="/">
                    <Detail />
                </Route>
                <Route path="/trending">
                    <Trending />
                </Route>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/card">
                    <ItemCard />
                </Route>
                </Switch>
            </div>
           
          </header>
          
            </React.Fragment>
            </Route>
        );
    }
}

export default Navbar;