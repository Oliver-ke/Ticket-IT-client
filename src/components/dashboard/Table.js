import { Table, Divider, Popconfirm,
   Button, Icon, Row, Col, Card} from 'antd';
import EditBox from './EditBox'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getUserTickets , deleteTicket } from '../../actions/userAction'
const { Column, } = Table;



const TableContainer = (props) =>{
    const [showForm, SetShowForm] = useState(false);
    const [data, setData] = useState([])
    useEffect(() =>{
      props.getUserTickets(props.auth.user.id);
      setData((privState) => ([...privState, props.user.userTickets]))
    }, [])
    const hanldeAddClick = () =>{
      SetShowForm(!showForm);
      console.log(props.user.userTickets)
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
              <Table rowKey="_id" dataSource={props.user.userTickets.length > 0 ? props.user.userTickets : []} bordered >
                  <Column title="Ticket Name" dataIndex="name"   key="name"  />
                  <Column  title="Ticket Ref"  dataIndex="_id" key="_id"  />
                  <Column title="Price" dataIndex="amount" key="amount" />
                  <Column title="Bought Tickets" dataIndex="boughtTickets"  key="boughtTicket" />
                  <Column  title="Action"  key="action"
                    render={(text, record) => (
                      props.user.userTickets.length >= 1
                        ? (
                          <span>
                          <a onClick={() => console.log("edit clicked")}>Edit</a>
                          <Divider type="vertical" />
                          <Popconfirm title="Sure to delete?" onConfirm={() =>{
                            props.deleteTicket(record._id, record.userId);
                            console.log(record)
                          }}>
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


TableContainer.propTypes = {
  getUserTickets: PropTypes.func.isRequired,
  deleteTicket: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth: state.auth,
  user: state.user
})

export default connect(mapStateToProps, { getUserTickets, deleteTicket })(TableContainer);


