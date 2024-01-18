import React, { Component } from 'react';
import ReactBootstrapNavbars from './components/ReactBootstrapNavbars';
import { Route, Switch } from "react-router-dom";

// 컴포넌트 아래에 다음의 import 구문을 넣어주시기 바랍니다.
import 'bootstrap/dist/css/bootstrap.css'; 
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Delivery from './components/Delivery';
import QnA from './components/QnA';
import Location from './components/Location';
import Login from './components/Login';
import Signup from './components/SignUp';
import Notice from './components/Notice';
import Consultation from './components/Consultation';
import FreeBoard from './components/FreeBoard';
import CommunityBoard from './components/CommunityBoard';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div>
        <ReactBootstrapNavbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Delivery" component={Delivery} />
          <Route exact path="/QnA" component={QnA} />
          <Route exact path="/Location" component={Location} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/notice" component={Notice} />
          <Route exact path="/freeboard" component={FreeBoard} />
          <Route exact path="/Consultation" component={Consultation} />
          <Route exact path="/Communityboard" component={CommunityBoard} />
          <Route exact path="/Product" component={Product} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;