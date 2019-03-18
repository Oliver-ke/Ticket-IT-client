import React, {Component} from 'react'
import Table from './Table'
import {
    Row, Col,
} from 'antd'

class Dashboard extends Component {
    render() {
        return(
           <Row>
               <Col style={{margin: "10px"}}>
                    <h1>Details on selling tickets</h1>
                        <Table />
               </Col>
           </Row>
        )
    }
}

export default Dashboard;