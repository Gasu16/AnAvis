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