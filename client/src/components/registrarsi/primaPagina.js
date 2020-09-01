import React, { Component, Fragment } from 'react';


        
//const form = document.getElementById('form');
const ruolo = document.getElementById('ruolo');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');


class primaPagina extends Component {
    // Funzioni JavaScript qui
    state = {
        ruolo:"",
        email: "",
        email2: ""
    };

    btnHandler = e => {
        // Se i campi sono tutti validi, allora:
        console.log("BUTTON HANDLER");
        if(regist.checkInputs()){
            return true;
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
        const ruolo = document.getElementById('ruolo');
        const email = document.getElementById('email');
        const email2 = document.getElementById('email2');
        
        // trim to remove the whitespaces
        const ruoloValue = ruolo.value.trim();
        const emailValue = email.value.trim();
        const email2Value = email2.value.trim();
        
        /* Settiamo queste variabili a 0 per controllare la validità dei campi nei controlli che seguono */
        var ru_valid = 0;
        var em_valid = 0;
        var em2_valid = 0;
        
        console.log("funzione checkInputs");
        if(ruoloValue === '') {
            regist.setErrorFor(ruolo, 'Inserisci ruolo');
            console.log("ruolo nullo");
        } else {
            regist.setSuccessFor(ruolo);
            console.log("ruolo ok");
            ru_valid = 1;
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
            em_valid = 1;
        }

        if(email2Value === '') {
            console.log("conferma email nulla");
            regist.setErrorFor(email2, 'Inserisci conferma email');
        } else if(emailValue !== email2Value) {
            console.log("Email diversa");
            regist.setErrorFor(email2, 'Gli indirizzi email non corrispondono');
        } else{
            console.log("conferma email ok");
            regist.setSuccessFor(email2);
            em2_valid = 1;
        }
        
        if((ru_valid & em_valid & em2_valid) === 1){
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
                        <h2>Crea Account</h2>
                    </div>
                <form id="form" className="form" action="Registrarsi">
                <div className="form-control">
                        <label htmlFor="username">Ruolo</label>
                        <input type="ruolo" id="ruolo" />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Email</label>
                        <input type="email" id="email"/>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Conferma Email</label>
                        <input type="email" id="email2"/>
                        <small>Error message</small>
                    </div>
                    <button type="Registrarsi" onClick={this.btnHandler}>
                        CONFERMA
                    </button>
                </form>
                </div>
                
            </Fragment> 

        );

    }
}

const regist = new primaPagina(ruolo, email, email2);

export default primaPagina;