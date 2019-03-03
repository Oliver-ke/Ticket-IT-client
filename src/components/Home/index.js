import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Row, Col, Spin} from 'antd'
import Landing from '../layout/landing'
import ItemContainer from './ItemContainer'
import { connect } from 'react-redux';
import styles from './styles'

import {getTickets} from '../../actions/ticketActions'


class Home  extends React.Component{
    
    componentDidMount(){
        this.props.getTickets();
    }
 
    render(){
        const {Content} = Layout;
        const {tickets, loading} = this.props.ticket
        console.log(this.props.location);
        return(
            <Row>
                <Col>
                     <Landing />
                </Col>
                <Content style={{ padding: '0 50px', background: '#f7f7f7', paddingBottom:'15px'}}>
                     {!loading ? <Row gutter={16}>
                         <h1 style={styles.caption}>::<span style={styles.text}>Featured Tickets</span></h1>
                         <ItemContainer tickets={tickets} />
                     </Row> : <div style={{textAlign:'center', margin: '20px', padding: '20px'}}>
                        <Spin size='large' />
                     </div>}
                 </Content> 
            </Row>
         )
    }
}

Home.propTypes = {
    getTickets: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    ticket: state.ticket
})


export default connect(mapStateToProps, { getTickets })(Home);
