import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import jwt_decode from 'jwt-decode';
import {setCurrentUser,loginUser, logoutUser} from './actions/authAction'
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken'

import { Layout,BackTop } from 'antd';
import Footer from './components/layout/footer'
import Header from './components/layout/header'
import Home from './components/Home'
import SearchPage from './components/search'
import AboutPage from './components/about'
import DetailPage from './components/detail'
import PaymentPage from './components/payment'
import RegForm from './components/auth/RegForm'
import loginForm from './components/auth/loginForm'
import Dashboard from './components/dashboard'
import './App.css';

//check for token in local storage if token is
// still valid authenticat user else redirect to login

if(localStorage.jwd_decode){
  setAuthToken(localStorage.jwd_decode);
  const decoded = jwt_decode(localStorage);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    const {Content} = Layout
    return (
      <Provider store={store}>
       <Router>
        <Layout className="layout">
            <Header/>
             <Content style={{height: '80vh'}}>
              {/* <Route exact path="/" component={Home} />
              <Route exact path="/search/:ref" component={SearchPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/detail/:id" component={DetailPage} />
              <Route exact path="/payment" component={PaymentPage} /> */}
              <Route exact path="/login" component={loginForm} />
              <Route exact path="/register" component={RegForm} />
              <Route exact path='/dashboard' component={Dashboard} />
             </Content>
            <Footer />
            <BackTop />
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;

