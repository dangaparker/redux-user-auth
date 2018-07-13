import React, { Component } from 'react';
import NavContainer from './nav_container';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';
import NavItem from './nav_item';

class Nav extends Component {

    renderAuthButton(){
        const { auth, signIn, signOut } = this.props;

        if(auth){
            return <button onClick={signOut} className="btn btn-outline-danger">Sign Out</button>
        }

        return <button onClick={signIn} className="btn btn-outline-primary">Sign In</button>
    }

    render(){
        return (
            <NavContainer>
                <NavItem to="/" text="Home" />
                <NavItem to="/about" text="About" />
                <NavItem to="/not-secret-list" text="Not Secret List" />
                <NavItem to="/secret-list" text="Secret List" />
                <NavItem to="/movie-quote" text="Movie Quote" />
                <NavItem to="/sign-up" text="Sign Up"/>
                
                <li className="nav-item">
                    {this.renderAuthButton()}
                </li>
            </NavContainer>
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default withRouter(connect(mapStateToProps, { signIn: signIn, signOut: signOut })(Nav));
