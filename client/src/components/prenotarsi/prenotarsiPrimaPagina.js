import React, { Component, Fragment } from 'react';
import axios from 'axios';
//import { data } from '../../../../server/routes/sedeAvis';


//const form = document.getElementById('form');
const regione = document.getElementById('regione');



class prenotarsiPrimaPagina extends Component {
    // Funzioni JavaScript qui
    state = {
        regione:""
    };

    btnHandler = e => {
        // Se i campi sono tutti validi, allora:
        console.log("BUTTON HANDLER");

        if(regist.checkInputs()){                
            axios({
                method: 'post',
                url: 'http://localhost:9000/prenotarsiPrimaPagina',
                headers: {
                    'crossDomain': true,
                        
                        //'Content-Type': 'application/x-www-form-urlencoded' // in caso rimuovere
                },
                data: {
                    regione: window.regioneGlobal,
                }
            }).then(res => {

                console.log(res);

                console.log("ECCO LA RISPOSTA - PRENOTARSI PRIMA PAGINA");
                window.regioneScelta = JSON.parse(res.config.data); // Leggiamo la regione scelta dalla risposta
                console.log(window.regioneScelta); // e la stampiamo a video sulla console del browser
                //window.sedeScelta = JSON.parse(res.config.data.sede);

                console.log("ECCO LA RISPOSTA - PRENOTARSI");

                window.location.href="http://localhost:3000/prenotarsi"; // Qui cambia pagina (redirect)
            });
            //return true; // in caso rimuovere
            
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
        const regione = document.getElementById('regione');
        
        window.regioneGlobal = regione.value.trim();

        // trim to remove the whitespaces
        //const regioneValue = regione.value.trim();
        const regioneValue = regione.value.trim();
        
        /* Settiamo queste variabili a 0 per controllare la validità dei campi nei controlli che seguono */
        var rg_valid = 0;
        
        console.log("funzione checkInputs");
        
        if(regioneValue === '') {
            regist.setErrorFor(regione, 'Inserisci regione');
            console.log("regione nulla");
        } else {
            regist.setSuccessFor(regione);
            console.log("regione ok");
            rg_valid = 1;
        }
        

        // ho tolto rg_valid, in caso rimetterlo
        if((rg_valid) === 1){
            console.log("RITORNA VERO: TUTTI I CAMPI SONO VALIDI");
            
            //window.location.href='/prenotarsi';
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
                        <h2>Inoltra prenotazione</h2>
                    </div>
                <form id="form" className="form" action="http://localhost:3000/prenotarsi">

                <div className="form-control">
                        
                        <legend>Regione</legend>
                        <select name="regione" id="regione" className="custom-select">
                            
                            <option value="ABRUZZO">ABRUZZO</option>
                            <option value="BASILICATA">BASILICATA</option>
                            <option value="CALABRIA">CALABRIA</option>
                            <option value="CAMPANIA">CAMPANIA</option>
                            <option value="EMILIA-ROMAGNA">EMILIA-ROMAGNA</option>
                            <option value="FRIULI VENEZIA-GIULIA">FRIULI VENEZIA-GIULIA</option>
                            <option value="LAZIO">LAZIO</option>
                            <option value="LIGURIA">LIGURIA</option>
                            <option value="LOMBARDIA">LOMBARDIA</option>
                            <option value="MARCHE">MARCHE</option>
                            <option value="MOLISE">MOLISE</option>
                            <option value="PIEMONTE">PIEMONTE</option>
                            <option value="PUGLIA">PUGLIA</option>
                            <option value="SARDEGNA">SARDEGNA</option>
                            <option value="SICILIA">SICILIA</option>
                            <option value="TOSCANA">TOSCANA</option>
                            <option value="TRENTINO-ALTO ADIGE">TRENTINO-ALTO ADIGE</option>
                            <option value="UMBRIA">UMBRIA</option>
                            <option value="VALLE D'AOSTA">VALLE D'AOSTA</option>
                            <option value="VENETO">VENETO</option>
                        </select> 
                        <small>Error message</small>
                        
                    </div>

                    <button type="prenotarsi" onClick={this.btnHandler}>
                        
                        INOLTRA
                        </button>
                </form>
                </div>
                
            </Fragment> 

        );

    }
}

const regist = new prenotarsiPrimaPagina(regione);

export default prenotarsiPrimaPagina;
