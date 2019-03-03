import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Spin} from 'antd'
import {confirmPayment} from '../../actions/paymentActions'




class Payment  extends React.Component{

    componentDidMount(){
        const params = new URLSearchParams(this.props.location.search);
        const ref = params.get('reference');
        this.props.confirmPayment(ref)
    }
  
    render(){
        const {status,message,data} = this.props.payment.paymentDetail;
        let amount, customer;
        if(status){
            amount = data.amount
            customer = data.customer
            console.log(this.props.payment.paymentDetail);
        }
       if(this.props.payment.paymentLoading){
           return (
               <div style={styles.container}>
                   <div style={styles.content}><Spin size='large' /></div>
               </div>
           )
       }
       else if (status) {
           return (
               <div style={styles.container}>
                    <div style={styles.content}> 
                        {message}
                        <p>Amount: {amount} </p>
                        <p>Email: {customer.email} </p>
                    </div>
               </div>
           )
       }
       else {
           return(
            <div style={styles.container}>
                <p>Payment Confarmation failed</p>
            </div>
           )
       }
    }
}

const styles = {
    container : {
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%', 
        height: '100%',
        alignItems: 'center'
    },
    content: {
        background: '#fff',
        width: '50%',
        padding: '20px'
    }
}


Payment.propTypes = {
    confirmPayment: PropTypes.func.isRequired,
    payment: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    payment: state.payment
})

export default connect(mapStateToProps, { confirmPayment })(Payment);
