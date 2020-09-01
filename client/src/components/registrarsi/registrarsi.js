import React, { Component, Fragment } from 'react';
import './registrarsi.css';
//import Submit from './submit';
import axios from 'axios';
/*
//const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// Aggiunte dopo
const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const sesso = document.getElementById('sesso');
const dataNascita = document.getElementById('dataNascita');
const luogoNascita = document.getElementById('luogoNascita');
const domicilio = document.getElementById('domicilio');
const cap = document.getElementById('cap');
const codiceFiscale = document.getElementById('codiceFiscale');
*/



class Registrarsi extends Component {

    // Settiamo lo state (ci serve per inviare i dati con axios)
    state = {
        form: "",
        username: "",
        email: "",
        password:"",
        password2: "",
        nome: "",
        cognome: "",
        sesso: "",
        dataNascita: "",
        luogoNascita: "",
        domicilio: "",
        cap: "",
        codiceFiscale: ""
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
        if(this.checkInputs()){
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
                    nome: window.nomeGlobal,
                    cognome: window.cognomeGlobal,
                    sesso: window.sessoGlobal,
                    dataNascita: window.dataNascitaGlobal,
                    luogoNascita: window.luogoNascitaGlobal,
                    domicilio: window.domicilioGlobal,
                    cap: window.capGlobal,
                    codiceFiscale: window.codiceFiscaleGlobal,
                }
            }).then(res => {
                console.log(res);
                console.log("ECCO LA RISPOSTA");
            });
            
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
        // Aggiunte dopo
        const nome = document.getElementById('nome');
        const cognome = document.getElementById('cognome');
        const sesso = document.getElementById('sesso');
        const dataNascita = document.getElementById('dataNascita');
        const luogoNascita = document.getElementById('luogoNascita');
        const domicilio = document.getElementById('domicilio');
        const cap = document.getElementById('cap');
        const codiceFiscale = document.getElementById('codiceFiscale');

        // trim() per rimuovere gli spazi vuoti
        // Definiamo le variabili globali con "window" per riutilizzarle su btnHandler() 
        window.userGlobal = username.value.trim();
        window.emailGlobal = email.value.trim();
        window.passwordGlobal = password.value.trim();
        window.password2Global = password2.value.trim();
        // Aggiunte dopo
        window.nomeGlobal = nome.value.trim();
        window.cognomeGlobal = cognome.value.trim();
        window.sessoGlobal = sesso.value.trim();
        window.dataNascitaGlobal = dataNascita.value.trim();
        window.luogoNascitaGlobal = luogoNascita.value.trim();
        window.domicilioGlobal = domicilio.value.trim();
        window.capGlobal = cap.value.trim();
        window.codiceFiscaleGlobal = codiceFiscale.value.trim();

        /* Settiamo queste variabili a 0 per controllare la validità dei campi nei controlli che seguono */
        var u_valid = 0; // username
        var e_valid = 0; // email
        var p1_valid = 0; // password 1
        var p2_valid = 0; // password 2
        var n_valid = 0; // nome
        var cogn_valid = 0; // cognome
        var s_valid = 0; // sesso
        var dNasc_valid = 0; // data nascita
        var lNasc_valid = 0; // luogo nascita
        var dom_valid = 0; // domicilio
        var cap_valid = 0; // cap
        var codF_valid = 0; // codice fiscale

        console.log("funzione checkInputs");
        
        /**** username ****/
        if(window.userGlobal === '') {
            this.setErrorFor(username, 'Inserisci username');
            console.log("username nullo");
        } else {
            this.setSuccessFor(username);
            console.log("username ok");
            u_valid = 1;
        }
        
        /**** email ****/
        if(window.emailGlobal === '') {
            this.setErrorFor(email, 'Inserisci email');
            console.log("email nulla");
        } else if (!this.isEmail(window.emailGlobal)) {
            this.setErrorFor(email, 'Email non valida');
            console.log("email NON valida");
        } else {
            this.setSuccessFor(email);
            console.log("email ok");
            e_valid = 1;
        }
        
        /**** password 1 ****/
        if(window.passwordGlobal === '') {
            console.log("password nulla");
            this.setErrorFor(password, 'Inserisci password');
        } else {
            console.log("password ok");
            this.setSuccessFor(password);
            p1_valid = 1;
        }
        
        /**** password 2 ****/
        if(window.password2Global === '') {
            console.log("password DUE nulla");
            this.setErrorFor(password2, 'Inserisci password');
        } else if(window.passwordGlobal !== window.password2Global) {
            console.log("Password diversa");
            this.setErrorFor(password2, 'Le password non corrispondono');
        } else{
            console.log("password ok");
            this.setSuccessFor(password2);
            p2_valid = 1;
        }

        // Aggiunte dopo
        /**** nome ****/
        if(window.nomeGlobal === ''){
            console.log("Nome nullo");
            this.setErrorFor(nome, 'Inserisci nome');
        } else{
            this.setSuccessFor(nome);
            console.log("nome ok");
            n_valid = 1;
        }

        /**** cognome ****/
        if(window.cognomeGlobal === '') {
            this.setErrorFor(cognome, 'Inserisci cognome');
            console.log("cognome nullo");
        } else {
            this.setSuccessFor(cognome);
            console.log("cognome ok");
            cogn_valid = 1;
        }

        /**** sesso ****/
        if(window.sessoGlobal === '') {
            this.setErrorFor(sesso, 'Inserisci sesso');
            console.log("inserisci sesso");
        } else {
            this.setSuccessFor(sesso);
            console.log("sesso ok");
            s_valid = 1;
        }

        /**** data nascita ****/
        if(window.dataNascitaGlobal === '') {
            this.setErrorFor(dataNascita, 'Inserisci data di nascita');
            console.log("data di nascita nulla");
        } else {
            this.setSuccessFor(dataNascita);
            console.log("data di nascita ok");
            dNasc_valid = 1;
        }
        
        /**** luogo nascita ****/
        if(window.luogoNascitaGlobal === '') {
            this.setErrorFor(luogoNascita, 'Inserisci il luogo di nascita');
            console.log("luogo di nascita nullo");
        } else {
            this.setSuccessFor(luogoNascita);
            console.log("luogo di nascita ok");
            lNasc_valid = 1;
        }
    
        /**** città domicilio ****/
        if(window.domicilioGlobal === '') {
            this.setErrorFor(domicilio, 'Inserisci la città di domicilio');
            console.log("città di domicilio nulla");
        } else {
            this.setSuccessFor(domicilio);
            console.log("città di domicilio ok");
            dom_valid = 1;
        }

        /**** CAP ****/
        if(window.capGlobal === '') {
            this.setErrorFor(cap, 'Inserisci CAP della città di domicilio');
            console.log("CAP nullo");
        } else {
            this.setSuccessFor(cap);
            console.log("CAP ok");
            cap_valid = 1;
        }

        /**** Codice Fiscale ****/
        if(window.codiceFiscaleGlobal === '') {
            this.setErrorFor(codiceFiscale, 'Inserisci codice fiscale');
            console.log("codice fiscale nullo");
        } else {
            this.setSuccessFor(codiceFiscale);
            console.log("codice fiscale ok");
            codF_valid = 1;
        }



        if((u_valid & e_valid & p1_valid & p2_valid & n_valid & cogn_valid & s_valid & dNasc_valid & lNasc_valid & dom_valid & cap_valid & codF_valid) === 1){
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
                <div id="cont" className="container" onSubmit={this.btnHandler}>
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
                    
                    <div className="form-control">
                        <label htmlFor="nome">Nome</label>
                        <input type="nome" id="nome" />
                        <small>Error message</small>
                    </div>

                    <div className="form-control">
                        <label htmlFor="cognome">Cognome</label>
                        <input type="cognome" id="cognome"/>
                        <small>Error message</small>
                    </div>

                    
                    <div className="form-control">
                        <legend>SESSO</legend>
                        <select name="sesso" id="sesso">
                            <option value="MASCHIO"> MASCHIO </option>
                            <option value="FEMMINA"> FEMMINA </option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="dataNascita">Data di nascita</label>
                        <input type="date" id="dataNascita"/>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="luogoNascita">Luogo di nascita</label>
                        <input type="luogoNascita" id="luogoNascita"/>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="domicilio">Città Domicilio</label>
                        <input type="domicilio" id="domicilio"/>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="cap">CAP DOMICILIO</label>
                        <input type="cap" id="cap"/>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="codiceFiscale">Codice Fiscale</label>
                        <input type="codiceFiscale" id="codiceFiscale"/>
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
/*
const this = new Registrati(
    username, 
    email, 
    password, 
    password2, 
    nome, 
    cognome,
    sesso,
    dataNascita,
    luogoNascita,
    domicilio,
    cap,
    codiceFiscale
);
*/
export default Registrarsi;