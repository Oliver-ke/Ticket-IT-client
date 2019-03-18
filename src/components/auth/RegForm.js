import React, {Component} from 'react';
import {register} from '../../actions/authAction';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty'
import {Link, withRouter} from 'react-router-dom'
import {
    Form, Input, Button, Spin, Card, Row, Col, Icon
  } from 'antd';

  

  class Register extends Component {
    state ={
      submitClicked : false,
      name: "",
      email: "",
      password: "",
      password2: "",
      btnDiabled: true
    }
    
    getHandler = inputName => e =>{
      let value = e.target.value
      this.setState(privState => ({...privState, [inputName]: value, btnDiabled: true}),
      () =>{
        let {name, email, password, password2} = this.state;
        if(!isEmpty(name) && !isEmpty(email) && !isEmpty(password) && !isEmpty(password2)){
          if(password2 === password){
            this.setState({btnDiabled: false})
          }
        }
      })
    }

    handleSubmit = (e) =>{
      e.preventDefault()
      let newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      }
      this.props.register(newUser, this.props.history);
    }
    render() {
      const itemLayout = {
        labelCol: {
         xs:{ span: 5}
        },
        wrapperCol:{
          xs:{span: 17}
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
          <div style={{textAlign: "center", marginBottom:"10px"}} >
            <Icon type="user" style={{ fontSize: '100px', color: '#08c' }} theme="outlined" />
            </div>
          <Form {...itemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Full Name">
              <Input value={this.state.name} name="name"
               onChange={this.getHandler('name')}
               placeholder="Enter your Full name"/>
            </Form.Item>

            <Form.Item label="Email">
              <Input value={this.state.email} name="email"
               onChange={this.getHandler('email')}
               placeholder="Enter your Email"/>
            </Form.Item>

            <Form.Item label="Password">
              <Input value={this.state.password}
               onChange={this.getHandler('password')} 
              name="password" type="password"  placeholder="Choose Your Password"/>
            </Form.Item>

            <Form.Item label="Confirm Password">
              <Input value={this.state.password2} 
              onChange={this.getHandler('password2')} 
              name="password2" type="password"  placeholder="Confirm Password"/>
            </Form.Item>

            <Form.Item {...submitLayout} >
              <Button disabled={this.state.btnDiabled}  type="primary" htmlType="submit">Register</Button>
              <span style={{padding: "10px"}}>Have an account <Link to="/login">login</Link></span>
            </Form.Item>
          </Form>
          </Card>
        </Col>
      </Row>
      );
    }
  }



Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth: state.auth
})



export default connect(mapStateToProps, {register })(Register);