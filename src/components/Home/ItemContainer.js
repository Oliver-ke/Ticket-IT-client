import React, {Fragment} from 'react';
import {Col} from 'antd';
import Card from '../Common/Card'

const ItemContainer = ({tickets}) =>{
    return(
        <Fragment>
             {tickets.map(val =>{
                 const {_id} = val
              
                 return(
                    <Col md={12} sm={24} key={_id} style={{paddingTop: '10px'}} >
                     <Card key={_id} content={val} />
                    </Col>
                 )
             })}  
        </Fragment>  
    )
}

export default ItemContainer;