import React, {Component} from 'react';
import { initPayment} from '../../actions/paymentActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Form, Input, Button, Spin
  } from 'antd';
  
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };
  class FormContainer extends Component {
    state ={
      submitClicked : false
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleBuyClicked()
      this.props.form.validateFields(
        (err,val) => {
          if (!err) {
            val.amount = this.props.amount;
            val.id = this.props.id
            this.setState({submitClicked: true})
            console.log(val)
            this.props.initPayment(val);
          }
        },
      );
    }
    
    componentDidUpdate(){
      const {authorization_url} = this.props.payment.initDetail
      if(typeof authorization_url !== 'undefined' || null ){
        window.location.href = `${authorization_url}`;
      }
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div>
           {this.state.submitClicked ? <Spin size="large" />: (
              <Form onSubmit={this.handleSubmit}>
              <Form.Item {...formItemLayout} label="Full Name">
                  {getFieldDecorator('fullname', {
                      rules: [{
                          required: true,
                          message: 'Please input your full name', 
                      }],
                  })(
                  <Input placeholder="Enter your full name" />
                  )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="Email">
                  {getFieldDecorator('email', {
                  rules: [{
                      required: true,
                      message: ' A valid email is needed to send your payment details',
                      type: 'email'
                  }],
                  })(
                  <Input placeholder="Please input your email" />
                  )}
          </Form.Item>
          <Form.Item {...formTailLayout}>
              <Button type="primary"  htmlType="submit">
              Proceed to Payment
              </Button>
          </Form.Item>
          </Form>
           )}
        </div>
      );
    }
  }


const FormWrapper = Form.create({ name: 'buyers_info_form' })(FormContainer);

FormWrapper.propTypes = {
  initPayment: PropTypes.func.isRequired,
  payment: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  payment: state.payment
})



export default connect(mapStateToProps, { initPayment })(FormWrapper);