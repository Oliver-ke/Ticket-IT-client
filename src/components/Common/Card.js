import React from 'react'
import {Link} from 'react-router-dom'
import { Card,Button} from 'antd'


const MyCard = ({content}) =>{
    const {_id,amount,name,description} = content;
    return(
        <Card style={{color:'#000', borderRadius: '10px', width: '100%'}} title={`Ticket ${name}`} bordered={false}>
            <p className="content">{amount}:: {description}</p>
            <div><Button type='primary'><Link to={`/detail/${_id}`} >View More</Link></Button></div>
        </Card>   
    )
}

export default MyCard;