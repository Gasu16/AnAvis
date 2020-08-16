import React, { Component, Fragment } from 'react';
import './registrarsi.css';

        
//const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');





class Registrarsi extends Component {
    // Funzioni JavaScript qui
    state = {
        form: "",
        username: "",
        email: "",
        password:"",
        password2: ""
    };

    btnHandler = e => {
        console.log("STEE", e);
        console.log("cosenza");
        regist.checkInputs();
    }

    setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    isEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    checkInputs() {
        
        //const form = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const password2 = document.getElementById('password2');
        
        // trim to remove the whitespaces
        
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        

        
        
        console.log("funzione checkInputs");
        if(usernameValue === '') {
            regist.setErrorFor(username, 'Inserisci username');
            console.log("username nullo");
        } else {
            regist.setSuccessFor(username);
            console.log("username ok");
        }
        
        if(emailValue === '') {
            regist.setErrorFor(email, 'Inserisci email');
            console.log("email nulla");
        } else if (!regist.isEmail(emailValue)) {
            regist.setErrorFor(email, 'Email non valida');
            console.log("email NON valida");
        } else {
            regist.setSuccessFor(email);
            console.log("email ok");
        }
        
        if(passwordValue === '') {
            console.log("password nulla");
            regist.setErrorFor(password, 'Inserisci password');
        } else {
            console.log("password ok");
            regist.setSuccessFor(password);
        }
        
        if(password2Value === '') {
            console.log("password DUE nulla");
            regist.setErrorFor(password2, 'Inserisci password');
        } else if(passwordValue !== password2Value) {
            console.log("Password diversa");
            regist.setErrorFor(password2, 'Le password non corrispondono');
        } else{
            console.log("password ok");
            regist.setSuccessFor(password2);
        }
    }

    // QUESTO È IL MAIN()

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
                    <button type="submit" onClick={
                        this.btnHandler
                        }>Registrati
                        
                    </button>
                </form>
                </div>
                
            </Fragment> 

        );

    }
}

const regist = new Registrarsi(username, email, password, password2);

export default Registrarsi;