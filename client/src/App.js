import React from 'react';
//import logo from './logo.svg';
import './App.css';

//import { renderIntoDocument } from 'react-dom/test-utils';
//import { render } from '@testing-library/react';
import Home from './components/home/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Prenotarsi from './components/prenotarsi/prenotarsi';
import Registrarsi from './components/registrarsi/registrarsi';
import primaPagina from './components/registrarsi/primaPagina';
import RichiestaEmergenza from './components/richiestaEmergenza/richiestaEmergenza';
import emergenzaSubmit from './components/richiestaEmergenza/emergenzaSubmit';
import prenotarsiSubmit from './components/prenotarsi/prenotarsiSubmit';
import Submit from './components/registrarsi/submit';
//import routes from './routes';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }

  callAPI(){
    /*
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
    */
  }

  componentWillMount(){
    this.callAPI();
  }

// Questo è quello che viene mostrato
  render(){
    return (
      
      <Router>      
        <div className="App">
        
          <ul id="menu" className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/prenotarsi'} className="nav-link">Prenotarsi</Link></li>
              <li><Link to={'/primaPagina'} className="nav-link">Registrarsi</Link></li>
              <li><Link to={'/emergenza'} className="nav-link">Richiesta Emergenza</Link></li>
          </ul>
          
          
          
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/prenotarsi' component={Prenotarsi} />
              <Route path='/primaPagina' component={primaPagina} />
              <Route path='/registrarsi' component={Registrarsi} />
              <Route path='/emergenza' component={RichiestaEmergenza} />
              <Route path='/emergenzaSubmit' component={emergenzaSubmit} />
              <Route path='/submit' component={Submit} />
              <Route path='/prenotarsiSubmit' component={prenotarsiSubmit} />
          </Switch>
        
          {this.props.children}
          <p> {this.state.apiResponse} </p>
        </div>
      </Router>
    );
  }
}

export default App;
