import React, { Component, Fragment } from 'react';
import './registrarsi.css';
//import Submit from './submit';
import axios from 'axios';
        
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
/*
    componentDidMount(){
        axios.get().then(res => {console.log("COMPONENTE AXIOS");});
    }
*/
    btnHandler = e => {
        // Se i campi sono tutti validi, allora:
        console.log("BUTTON HANDLER");
        /*
        this.setState({[username] : username.value.trim()});
        console.log("ECCOLO LO USERNAME MALEDETTO");
        console.log(this.state.username);
        */
        if(regist.checkInputs()){
            axios({
                method: 'post',
                url: 'http://localhost:9000/submit',
                headers: {
                    'crossDomain': true,
                    
                    //'Content-Type': 'application/x-www-form-urlencoded' // in caso rimuovere
                },
                data: {
                    username: window.userGlobal,
                    email: window.emailGlobal,
                    password: window.passwordGlobal,
                    password2: window.password2Global,
                }
            }).then(res => {
                console.log(res);
                console.log("ECCO LA RISPOSTA");
            });
            //return true// in caso rimuovere
        }
        // altrimenti...
        e.preventDefault();
        return false;
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
        // Definiamo le variabili globali con "window" per riutilizzarle su btnHandler() 
        window.userGlobal = username.value.trim();
        window.emailGlobal = email.value.trim();
        window.passwordGlobal = password.value.trim();
        window.password2Global = password2.value.trim();


        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
        
        /* Settiamo queste variabili a 0 per controllare la validità dei campi nei controlli che seguono */
        var u_valid = 0;
        var e_valid = 0;
        var p1_valid = 0;
        var p2_valid = 0;
        
        console.log("funzione checkInputs");
        if(usernameValue === '') {
            regist.setErrorFor(username, 'Inserisci username');
            console.log("username nullo");
        } else {
            regist.setSuccessFor(username);
            console.log("username ok");
            u_valid = 1;
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
            e_valid = 1;
        }
        
        if(passwordValue === '') {
            console.log("password nulla");
            regist.setErrorFor(password, 'Inserisci password');
        } else {
            console.log("password ok");
            regist.setSuccessFor(password);
            p1_valid = 1;
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
            p2_valid = 1;
        }
        if((u_valid & e_valid & p1_valid & p2_valid) === 1){
            console.log("RITORNA VERO: TUTTI I CAMPI SONO VALIDI");
            return true;
        }
        console.log("RITORNA FALSO: C'È ALMENO UN CAMPO NON VALIDO");
        return false;
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
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                        <small>Error message</small>

                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password check</label>
                        <input type="password" id="password2"/>
                        <small>Error message</small>
                    </div>
                    <button type="submit" onClick={this.btnHandler}>
                        Registrati
                    </button>
                </form>
                </div>
                
            </Fragment> 

        );

    }
}

const regist = new Registrarsi(username, email, password, password2);

export default Registrarsi;