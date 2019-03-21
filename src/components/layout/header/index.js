import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import {Layout, Menu, Button} from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {setCurrentNav} from '../../../actions/ticketActions';
import {logoutUser} from '../../../actions/authAction';
import modal from '../../Common/notificationModal'
class Header extends React.Component{
    componentDidMount(){
        this.props.setCurrentNav(1);
    }

    handleLogout =() =>{
        modal({type:'confirm',mssg: 'Loging out..',
        title:"Are you sure you wish to logout", okClick:this.props.logoutUser,
        onCancel:true})  
    }
    
    render(){
        const {Header} = Layout;
        const {currentNav} = this.props.ticket
        return(
            <Header>
                <div className="logo" />
                    {!this.props.auth.isAuthenticated ? (
                         <Menu
                         theme="dark"
                         mode="horizontal"
                         selectedKeys={[`${currentNav}`]}
                         onClick={({item,key}) => this.props.setCurrentNav(key)}
                         defaultSelectedKeys={['1']}
                         style={{ lineHeight: '64px', textAlign:'Right'}}>
                             <Menu.Item key="1"><Link to="/"> Home </Link></Menu.Item>
                             <Menu.Item key="2"><Link to="/search"> Find Ticket</Link></Menu.Item>
                             <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
                             <Menu.Item key="4"><Link to="/register">Register</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/login">Login</Link></Menu.Item>
                        </Menu>
                    )  
                    : (
                        <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[`${currentNav}`]}
                        onClick={({item,key}) => this.props.setCurrentNav(key)}
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px', textAlign:'Right'}}>
                            <Menu.Item key="1"><Link to="/"> Home </Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/search"> Find Ticket</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item style={{background: 'none'}}><Button style={{background: '#e30005', border: 0, color: '#fff'}}
                            shape="round" icon="logout" onClick={this.handleLogout} size="large">
                                Logout
                            </Button></Menu.Item>
                        </Menu>
                    ) }
               
          </Header>
        )
    }
}

Header.propTypes = {
    setCurrentNav: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    ticket: state.ticket,
    auth: state.auth
})

export default connect(mapStateToProps, { setCurrentNav, logoutUser })(Header);