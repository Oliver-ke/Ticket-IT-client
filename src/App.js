import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Provider} from 'react-redux';
import store from './store';

import { Layout,BackTop } from 'antd';
import Footer from './components/layout/footer'
import Header from './components/layout/header'
import Home from './components/Home'
import SearchPage from './components/search'
import AboutPage from './components/about'
import DetailPage from './components/detail'
import PaymentPage from './components/payment'

import './App.css';

class App extends Component {
  render() {
    const {Content} = Layout
    return (
      <Provider store={store}>
       <Router>
        <Layout className="layout">
            <Header/>
             <Content style={{height: '80vh'}}>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/search/:ref" component={SearchPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/detail/:id" component={DetailPage} />
              <Route exact path="/payment" component={PaymentPage} />
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
