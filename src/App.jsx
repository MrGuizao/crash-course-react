import React, { Component } from 'react';
import './App.css';
// import Map from './basico/Map';
// import Basico from './ClassComponent/Basico';
import MudaNome, { Importacao, Importacao2, Importacao3 } from './basico/Importacao';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [],
      teste: 'IGREJA IS SHIT'
    }
  }

  componentDidMount() {
    // fetch('http://files.cod3r.com.br/curso-js/funcionarios.json')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(res => this.setState({ id: res }))
  }

  // cinco = () => this.state.id.map((el, index) => <Map key={index} nome={el.name} id={el.id} />)


  render() {
    return (
      <div className="boxes">
        <Importacao />
        <Importacao2 />
        <Importacao3 />
        <MudaNome />
       
        {/* <Basico teste={this.state.teste}/> */}
      </div>
    )
  }
}
