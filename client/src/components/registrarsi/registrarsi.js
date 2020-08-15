import React, { Component, Fragment } from 'react';
import './registrarsi.css';


class Registrarsi extends Component {
    render() {
        return (

            <Fragment>
                
                <div id="cont" class="container">
                    <div class="header">
                        <h2>Create Account</h2>
                    </div>
                <form id="form" class="form">
                    <div class="form-control">
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                        <small>Error message</small>
                    </div>
                    <div class="form-control">
                        <label for="username">Email</label>
                        <input type="email" id="email" />
                        <small>Error message</small>
                    </div>
                    <div class="form-control">
                        <label for="username">Password</label>
                        <input type="password" id="password"/>
                        <small>Error message</small>
                    </div>
                    <div class="form-control">
                        <label for="username">Password check</label>
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