import React from 'react';
import {Col, Row, Form, Icon, Input, Button} from 'antd'
import './style.css'

  class Landing extends React.Component {
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    render() {
      return (
        <Row>
            <Col>
                <div className='landing'>
                   <div className='search-item'>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                            <Form.Item>
                                <Input style={{width: '500px', height: 50}} prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Find Ticket With ref code" />
                            </Form.Item>
                            <Form.Item>
                                <Button style={{width: '120px', height:50, Background: '#ccc' }} htmlType="submit" > Search Ticket  </Button>
                            </Form.Item>
                        </Form>
                   </div>
                </div>
            </Col>
        </Row>
      );
    }
  }
  
  const SearchLanding = Form.create({ name: 'search_form' })(Landing);

  export default SearchLanding 
  
