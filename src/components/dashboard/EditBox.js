import React, {Component} from 'react'
import {Form, Input, Button, Card,
   Row,Spin, Icon, Col, message} from 'antd'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { addTicket } from '../../actions/userAction'
import modal from '../Common/notificationModal'

class EditBox extends Component {
  state = {
    name: '',
    amount: '',
    description: '',
    showModal: false
  }

  handleInput = (e) =>{
    const {name,value} = e.target
    this.setState(privstate => ({...privstate, [name]:value}))
  }
  handleFormSubmit = (e) =>{
    e.preventDefault()
    const {name,amount,description} = this.state
    let newTicket = {
      name,
      amount,
      description,
      userId: this.props.auth.user.id
    }
    console.log(newTicket);
    this.props.addTicket(newTicket);
    
    if(!this.props.user.loading){
      this.setState(privstate => ({name: '', amount: '', description: '', showModal: true}),
      () =>(this.state.showModal && (modal({type:'success',
       mssg: 'Your ticket is now live for purchase',
       title:"Ticket added successfully", okClick:this.props.cancelClick}))))
    }
  }
  render(){
    const {TextArea} = Input;
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    
    return(
        <Card style={{margin: 10, background: "#fbfbfb", borderRadius: "10px"}}>
          {this.props.user.loading ? (<Spin indicator={antIcon} />) : (
             <Form  onSubmit={this.handleFormSubmit}>
             <Row gutter={24}>
               <Col xs={24} md={12}>
                 <Col span={24}>
                   <Form.Item label="Name">
                     <Input value={this.state.name} name='name'
                       onChange={this.handleInput}
                       style={{height: '45px'}} />
                   </Form.Item>
                 </Col>
                 <Col span={24}>
                   <Form.Item label="Price">
                     <Input type="number"value={this.state.amount} name='amount'
                       onChange={this.handleInput} style={{height: '45px'}} />
                   </Form.Item>
                 </Col>
               </Col>
               <Col xs={24} md={12}>
                 <Form.Item label="Description">
                   <TextArea placeholder="Description" value={this.state.description} 
                       name='description'
                       onChange={this.handleInput} autosize={{ minRows: 5, maxRows: 6 }} />
                 </Form.Item>
               </Col>
             
             </Row>
             <Row>
               <Col span={24} style={{ textAlign: 'right' }}>
                 <Button type="primary" htmlType="submit">Add</Button>
                 <Button onClick={this.props.cancelClick} style={{ marginLeft: 8 }}>Cancel</Button>
               </Col>
             </Row>
           </Form>
          )}
        </Card>
    )
  }
}

EditBox.propTypes = {
    addTicket: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    user: state.user
})

export default connect(mapStateToProps, { addTicket })(EditBox);

