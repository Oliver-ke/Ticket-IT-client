import React, {Component} from 'react'
import { Card, Button} from 'antd'


const DashCard = (props) =>{
    return(
        <Card style={{color:'#000', borderRadius: '10px', width: '100%'}} title={`Ticket ${name}`} bordered={false}>
        <p className="content">{amount}:: {description}</p>
        <div>
            <Button onClick={props.showEditModal}>Edit</Button>
            <Button onClick={props.showDeleteModal}>Delete</Button>
        </div>
        </Card> 
    )
}