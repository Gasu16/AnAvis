import React, { Component, Fragment } from 'react';
import './registrarsi.css';


class Registrarsi extends Component {
    render() {
        return (

            <Fragment>
                
                <div id="cont" className="container">
                    <div className="header">
                        <h2>Create Account</h2>
                    </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Email</label>
                        <input type="email" id="email" />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Password</label>
                        <input type="password" id="password"/>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Password check</label>
                        <input type="password" id="password2"/>
                        <small>Error message</small>
                    </div>
                    <button>Registrati</button>
                </form>
                </div>

            </Fragment> 
            
        );
    }
}

export default Registrarsi;