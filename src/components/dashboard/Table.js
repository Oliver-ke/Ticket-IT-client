import { Table, Divider, Tag, Popconfirm,
   Button, Icon, Row, Col, Card} from 'antd';
import EditBox from './EditBox'
import React, {useState} from 'react'
const { Column, } = Table;

const data = [];

const TableContainer = (props) =>{
    const [showForm, SetShowForm] = useState(false);
    const [formData, setData] = useState({})

  
    const hanldeAddClick = () =>{
      SetShowForm(!showForm);
    }
    return(
       <Card>
         <Row>
           <Col>
              <Button style={{margin: '20px'}} onClick={hanldeAddClick} >
              Add Ticket {showForm ? <Icon type="down" /> : <Icon type="up" />}
              </Button>
           </Col>
         </Row>
           {showForm && (<EditBox cancelClick={ () => SetShowForm(false)}/>)}
          <Row>
            <Col span={24}>
              <Table dataSource={data} bordered >
                  <Column title="Ticket Name" dataIndex="ticketName"   key="ticketName"  />
                  <Column  title="Ticket Ref"  dataIndex="ticketRef" key="ticketRef"  />
                  <Column title="Price" dataIndex="price" key="price" />
                  <Column title="Bought Tickets" dataIndex="boughtTickets"  key="boughtTicket" />
                  <Column title="Tags" dataIndex="tags" key="tags"
                    render={tags => (
                      <span>
                        {tags.map(tag => <Tag color="red" key={tag}>{tag}</Tag>)}
                      </span>
                    )}
                  />
                  <Column  title="Action"  key="action"
                    render={(text, record) => (
                      data.length >= 1
                        ? (
                          <span>
                          <a onClick={() => console.log("edit clicked")}>Edit</a>
                          <Divider type="vertical" />
                          <Popconfirm title="Sure to delete?" onConfirm={() => console.log("accepted", record)}>
                            <a>Delete</a>
                          </Popconfirm>
                          </span>
                        ) : null
                    ) }
                  />
                </Table>
            </Col>
          </Row>
       </Card>
    )
}

export default TableContainer
