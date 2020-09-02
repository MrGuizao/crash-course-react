import React, { Component } from 'react';
import './App.css';
// import MudaNome, { Importacao, Importacao2, Importacao3 } from './basico/Importacao';
// export default class App extends Component {
//   render() {
//     // IMPORTAÇÕES
//     return (
//       <div className="boxes">
//         <Importacao />
//         <Importacao2 />
//         <Importacao3 />
//         <MudaNome />
//       </div>
//     )
//   }
// }



// MAP - MAP - MAP - MAP - MAP - MAP - MAP - MAP - MAP - MAP - MAP - MAP - MAP - MAP - MAP
// import Map from './basico/Map';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: [],
//     }
//   }

//   componentDidMount() {
//     fetch('http://files.cod3r.com.br/curso-js/funcionarios.json')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(data => data.json())
//       .then(res => this.setState({ id: res }))
//   }

//   render() {
//     return (
//       <div className="boxes">
//         {this.state.id.map(el => <Map key={el.id} nome={el.name} id={el.id} />)}
//       </div>
//     )
//   }
// }



// BASICO - BASICO - BASICO - BASICO - BASICO - BASICO - BASICO - BASICO
// import Basico from './ClassComponent/Basico';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       teste: 'Igreja is Shit',
//     }
//   }

//   render() {
//     // TESTE
//     return (
//       <div className="boxes">
//         <Basico teste={this.state.teste} />
//       </div>
//     )
//   }
// }



// MULTIPLAS CLASSES IMPORT -  MULTIPLAS CLASSES IMPORT - MULTIPLAS CLASSES IMPORT - MULTIPLAS CLASSES IMPORT
// import Olar, { MultipleClasses, MultipleClasses2, MultipleClasses3 } from './ClassComponent/MultipleClasses';
// export default class App extends Component {

//   btnClick = () => this.setState({ increment: this.state.increment + 1 });
//   inputLabel = () => this.setState({ text: this.state.text });

//   render() {
//     return (
//       <div className="boxes" >
//         <MultipleClasses />
//         <MultipleClasses2 />
//         <MultipleClasses3 />
//         <Olar />
//       </div>
//     )
//   }
// }





// LIFE CICLE - LIFE CICLE - LIFE CICLE - LIFE CICLE - LIFE CICLE - LIFE CICLE - LIFE CICLE - LIFE CICLE - LIFE CICLE
// import LifeCicle from './ClassComponent/LifeCicle';
// export default class App extends Component {

//   render() {
//     return (
//       <div className="boxes">
//         <h1>Da F12 Ai, troxa</h1>
//         <LifeCicle />
//       </div>
//     )
//   }
// }



// import ButtonIncremet from './states/ButtonIncremet';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       increment: 0,
//       text: ''
//     }
//   }

//   btnClick = () => this.setState({ increment: this.state.increment + 1 });

//   render() {
// STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE
// return (
//   <div className="boxes">
//     <ButtonIncremet btnClick={this.btnClick} increment={this.state.increment} label={this.inputLabel} />
//   </div>
// )
// STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE - STATE


// CONDITIONAL RENDERING - CONDITIONAL RENDERING - CONDITIONAL RENDERING - CONDITIONAL RENDERING - CONDITIONAL RENDERING
// switch (this.state.increment) {
//   case 0: return (
//     <div className="boxes">
//       <h1 style={{ color: 'green' }}>Ola mundo maior que {this.state.increment}</h1>
//       <button onClick={this.btnClick}>Click me</button>
//     </div>
//   )

//   case 1: return (
//     <div className="boxes">
//       <h1 style={{ color: 'yellow' }}>Ola mundo maior que {this.state.increment}</h1>
//       <img src="https://unsplash.it/200/200" alt="as" />
//       <button onClick={this.btnClick}>Click me</button>
//     </div>
//   )

//   case 2: return (
//     <div className="boxes">
//       <h1 style={{ color: 'blue' }}>Ola mundo maior que {this.state.increment}</h1>
//       <h2>teste 2</h2>
//       <button onClick={this.btnClick}>Click me</button>
//     </div>
//   )

//   case 3: return (
//     <div className="boxes">
//       <h1 style={{ color: 'pink' }}>Ola mundo maior que {this.state.increment}</h1>
//       <button onClick={this.btnClick}>Click me</button>
//     </div>
//   )

//   default: return (
//     <div className="boxes">
//       <h1 style={{ color: 'red' }}>Ola mundo maior que {this.state.increment}</h1>
//       <button onClick={this.btnClick}>Click me</button>
//     </div>
//   )
// }
// CONDITIONAL RENDERING - CONDITIONAL RENDERING - CONDITIONAL RENDERING - CONDITIONAL RENDERING - CONDITIONAL RENDERING

//   }
// }



// FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ''
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
