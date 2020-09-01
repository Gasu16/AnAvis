import React, { Component, Fragment } from 'react';


        
//const form = document.getElementById('form');
const gruppoSanguigno = document.getElementById('gruppoSanguigno');
const quantitativo = document.getElementById('quantitativo');
const sede = document.getElementById('sede');


class richiestaEmergenza extends Component {
    // Funzioni JavaScript qui
    state = {
        gruppoSanguigno:"",
        quantitativo: "",
        sede: ""
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

    checkInputs() {
        
        //const form = document.getElementById('form');
        const gruppoSanguigno = document.getElementById('gruppoSanguigno');
        const quantitativo = document.getElementById('quantitativo');
        const sede = document.getElementById('sede');
        
        // trim to remove the whitespaces
        const gruppoValue = gruppoSanguigno.value.trim();
        const quantitativoValue = quantitativo.value.trim();
        const sedeValue = sede.value.trim();
        
        /* Settiamo queste variabili a 0 per controllare la validità dei campi nei controlli che seguono */
        var gs_valid = 0;
        var qt_valid = 0;
        var se_valid = 0;
        
        console.log("funzione checkInputs");
        if(gruppoValue === '') {
            regist.setErrorFor(gruppoSanguigno, 'Inserisci gruppo sanguigno');
            console.log("gruppo sanguigno nullo");
        } else {
            regist.setSuccessFor(gruppoSanguigno);
            console.log("gruppo sanguigno ok");
            gs_valid = 1;
        }

        if(quantitativoValue === '') {
            regist.setErrorFor(quantitativo, 'Inserisci quantitativo');
            console.log("quantitativo nullo");
        } else {
            regist.setSuccessFor(quantitativo);
            console.log("quantitativo ok");
            qt_valid = 1;
        }

        if(sedeValue === '') {
            regist.setErrorFor(sede, 'Inserisci sede');
            console.log("Inserisci sede");
        } else {
            regist.setSuccessFor(sede);
            console.log("sede ok");
            se_valid = 1;
        }


        if((gs_valid & qt_valid & se_valid) === 1){
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
                        <h2>Inoltra richiesta di Emergenza</h2>
                    </div>
                <form id="form" className="form" action="emergenzaSubmit">
                <div className="form-control">
                        <label htmlFor="username">Gruppo Sanguigno</label>
                        <input type="grupposanguigno" id="grupposanguigno" />
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Quantitativo</label>
                        <input type="quantitativo" id="quantitativo"/>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Sede</label>
                        <input type="sede" id="sede"/>
                        <small>Error message</small>
                    </div>
                    <button type="emergenzaSubmit" onClick={this.btnHandler}>
                        INOLTRA
                    </button>
                </form>
                </div>
                
            </Fragment> 

        );

    }
}

const regist = new richiestaEmergenza(gruppoSanguigno, quantitativo, sede);

export default richiestaEmergenza;