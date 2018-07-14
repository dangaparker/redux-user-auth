import React, { Component, Fragment } from 'react';
import NavContainer from './nav_container';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';
import NavItem from './nav_item';

class Nav extends Component {
    renderLinks() {
        if (this.props.auth) {
            return (
                <Fragment>
                    <NavItem to="/secret-list" text="Secret List" />
                    <NavItem to="/movie-quote" text="Movie Quote" />
                    <li className='nav-item'>
                        <button  onClick={this.props.signOut} className="btn btn-outline-danger">Sign Out</button>
                    </li>
                    {/* <NavItem  to="/" text="Sign Out" /> */}
                </Fragment>

            )
        }
        return(
            <Fragment>
                <NavItem to="/sign-up" text="Sign Up" />
                <NavItem to="/sign-in" text="Sign In" />
            </Fragment>
        )
    }

    render() {
        return (
            <NavContainer>
                <NavItem to="/" text="Home" />
                <NavItem to="/about" text="About" />
                {this.renderLinks()}

                
            </NavContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default withRouter(connect(mapStateToProps, { signIn: signIn, signOut: signOut })(Nav));
