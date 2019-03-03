import React from 'react'
import { Link } from 'react-router-dom'
import {Layout, Menu} from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {setCurrentNav} from '../../../actions/ticketActions';

class Header extends React.Component{
    componentDidMount(){
        this.props.setCurrentNav(1);
    }
    
    render(){
        const {Header} = Layout;
        const {currentNav} = this.props.ticket
        return(
            <Header>
                <div className="logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[`${currentNav}`]}
                onClick={({item,key}) => this.props.setCurrentNav(key)}
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px', textAlign:'Right'}}
                >
                    <Menu.Item key="1"><Link to="/"> Home </Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/search"> Find Ticket</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
                    <Menu.Item key="4">Register</Menu.Item>
                    <Menu.Item key="5">Login</Menu.Item>
                </Menu>
          </Header>
        )
    }
}

Header.propTypes = {
    setCurrentNav: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    ticket: state.ticket
})

export default connect(mapStateToProps, { setCurrentNav })(Header);