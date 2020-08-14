import React, { Component } from 'react';
import './registrarsi.css';


class Registrarsi extends Component {
    render() {
        return (
            <div id="cont" class="container">
                <h2 class="text-center">FORM DI REGISTRAZIONE</h2>
                    
                    <div class="row">

                        <div class="col-md-6 col-md-offset-3">
                        
                            <div id="errorMessage"></div>
                            <form id="form" action="submit.html" method="POST" onSubmit="return validate();">

                            <div class="form-group">
                                <label for="nome">Nome</label>
                                <input type="nome" class="form-control" id="nome"></input>
                                
                                <p></p>
                                
                                <label for="cognome">Cognome</label>                                
                                <input type="cognome" class="form-control" id="cognome"></input>
                            
                                <p></p>

                                <label for="sesso">Sesso</label>
                                <input type="sesso" class="form-control" id="sesso"></input>
                            
                                <p></p>

                                <label for="codiceFiscale">Codice Fiscale</label>
                                <input type="codiceFiscale" class="form-control" id="codiceFiscale"></input>
                            
                                <p></p>

                                <label for="">Data di nascita</label>
                                <input type="date" class="form-control" id="DataNascita"></input>
                            
                                <p></p>

                                <label for="luogoNascita">Luogo di nascita</label>
                                <input type="luogoNascita" class="form-control" id="luogoNascita"></input>
                            
                                <p></p>

                                <label for="cittàDomicilio">Città Domicilio</label>
                                <input type="cittàDomicilio" class="form-control" id="cittàDomicilio"></input>
                            
                                <p></p>

                                <label for="capDomicilio">Cap Domicilio</label>
                                <input type="capDomicilio" class="form-control" id="capDomicilio"></input>
                            
                                <p></p>

                                <label for="numeroCellulare">Numero di cellulare</label>
                                <input type="numeroCellulare" class="form-control" id="numeroCellulare"></input>
                            
                                <p></p>

                                <label for="email">Indirizzo email</label>
                                <input type="email" class="form-control" id="email"></input>
                            
                                <p></p> 
                            
                                <label for="password">Password </label>
                                <input type="password" class="form-control" id="Password"></input>
                            </div>

                            <div class="checkbox">
                                <label><input type="checkbox"></input>Ricordami</label>
                            </div>

                            <button type="submit" class="btn btn-success">Registrati</button>
                            </form>

                        </div>

                    </div>
                        
            </div>
            
        );
    }
}

export default Registrarsi;