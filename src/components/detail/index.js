import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Card, Button, Icon} from 'antd';
import {connect} from 'react-redux';
import { getTicket } from '../../actions/ticketActions'
import Form from './Form'



class Detail extends Component{
    state={
        isBuy: false,
        buyClicked: false
    }

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.getTicket(id)
    }
    
    render(){
        const {_id, name,amount,description,date} = this.props.ticket.ticket;
        return(
           <Fragment>
                <Card style={{margin: '20px'}} title="Ticket Details">
                <Card type="inner" title={name}  extra={<a href="#">More</a>} >
                    <p>Amount: {amount}</p>
                    <p>Description: {description}</p>
                    <p>Date: {date}</p>
                </Card>
                {this.state.isBuy && (
                    <Card type="inner" style={{marginTop: '20px'}}  title="Buyers Detail">
                       <Form id={_id} handleBuyClicked={() =>this.setState({buyClicked: true})}
                        amount={amount} />
                   </Card>
                )}
                <Button disabled={this.state.buyClicked} 
                onClick={()=>this.setState({isBuy: !this.state.isBuy})} 
                type="primary" style={{fontSize: 14, margin: '10px'}}>
                    Buy Ticket <Icon type="shopping-cart" />
                </Button>
            </Card>
             
           </Fragment>
        )
    }
}

//defining proptypes for this component
//note ticket refers to the reducer, i.e the tickets reducer
Detail.propTypes = {
    getTicket: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    ticket: state.ticket
})

export default connect(mapStateToProps, { getTicket })(Detail);