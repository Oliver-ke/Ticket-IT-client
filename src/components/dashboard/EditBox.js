import React, {useState} from 'react'
import {Form, Input, Button, Card} from 'antd'


const EditBox = (props) =>{
    const {TextArea} = Input
    const [name, setName] = useState('')
    const [description, setDesp] = useState('')

    const itemLayout = {
        wrapperCol:{
          xs:{span: 24}
        }
      }

    const submitLayout = {
    wrapperCol:{
        xs:{span: 24}
        }
    }
    return(
        <Card style={{margin: 10, background: "#fbfbfb", borderRadius: "10px"}}>
            <Form {...itemLayout} layout="inline" onSubmit={() => console.log("form submited")}>

          <Form.Item label="Ticket name">
              <Input  />
          </Form.Item>
          <Form.Item label="Ticket name">
              <Input  />
          </Form.Item>
          <Form.Item label="Ticket name">
              <Input  />
          </Form.Item>
          <Form.Item label="Ticket name">
              <Input  />
          </Form.Item>
          <Form.Item label="Ticket name">
              <Input  />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea placeholder="Description" autosize={{ minRows: 2, maxRows: 6 }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">Save</Button>
          </Form.Item>

          <Form.Item>
            <Button type="secondary">Cancel </Button>
          </Form.Item>

          </Form>
          
        </Card>
    )
}


export default EditBox;

