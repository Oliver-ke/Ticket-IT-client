import React, {Component} from 'react';
import {loginUser} from '../../actions/authAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty'
import {Link, withRouter} from 'react-router-dom'

import {
    Form, Icon, Input, Button, Row, Col, Card, Alert 
  } from 'antd';
  
  class LoginForm extends Component {
    state ={
      email: '',
      password: '',
      errors: []
    }

    handleInput = e =>{
      let name = e.target.name;
      let value = e.target.value;
      this.setState((privState => ({[name]: value, errors: []})))
      console.log(this.state)
    }
 //--------//
    componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
      }
    }
  
    componentWillReceiveProps(nextProps) {

      if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
      }
  
      if (nextProps.auth.errors) {
        console.log("error is firing")
        let arrError = Object.values(nextProps.auth.errors)
        this.setState({ errors: arrError });
      }
    }

    //-----//

    handleSubmit = (e) => {
      e.preventDefault();
     let user = {
       email: this.state.email,
       password: this.state.password
     }
     this.props.loginUser(user);
    }
  
    render() {
      const itemLayout = {
        wrapperCol:{
          xs:{span: 23}
        }
      }
      const submitLayout = {
        labelCol: {
          xs:{ span: 6}
         },
         wrapperCol:{
           xs:{span: 18}
         }
      }
      return (
        <Row type="flex" style={{height: '80vh'}} justify="center" align="middle" >
        <Col style={{height: '60vh'}} xs={24} sm={10}>
          <Card style={{borderRadius:"20px"}}>
            <div style={{textAlign: "center", marginBottom:"20px"}} >
            <Icon  type="login" style={{ fontSize: '100px', color: '#08c' }} theme="outlined" />
            </div>
            {this.state.errors.length > 0  && (<div style={{margin: "20px"}}>
              <Alert
                  message="Error"
                  description={this.state.errors}
                  type="error"
                  showIcon
                />
             </div>)}
          <Form {...itemLayout} onSubmit={this.handleSubmit}>
              <Form.Item>
                <Input type="email" style={{height: '50px'}}  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                 placeholder="Email" value={this.state.email} name="email" onChange={this.handleInput}/>         
              </Form.Item>
              <Form.Item>
                <Input style={{height: '50px'}}  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} onChange={this.handleInput}
                 type="password" placeholder="Password" value={this.state.password} name="password" />      
              </Form.Item>
              <Form.Item {...submitLayout}>
                <Button type="primary" htmlType="submit">
                  Log in
                </Button>
                <span style={{padding: "10px"}}>Or <Link to="/register">register now!</Link></span>
              </Form.Item>
          </Form>
          </Card>
        </Col>
      </Row>
      );
    }
  }

  LoginForm.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state =>({
    auth: state.auth
  })
  
  
  
  export default connect(mapStateToProps, {loginUser })(LoginForm);