import React, { Component } from 'react';
import './App.css';
import './forms/style.css'
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


// TESTES COM SETSTATE - TESTES COM SETSTATE - TESTES COM SETSTATE - TESTES COM SETSTATE - TESTES COM SETSTATE - TESTES COM SETSTATE
// export default class App extends Component {
//   state = {
//     inc: 0,
//   }

// handleClick = () => {
//   // this.setState((state) => ({ inc: state.inc + 1 })) //Simplificado
//   this.setState((state) => {
//     return { inc: state.inc + 1 }
//   })
// }

// handleClick = async () => {
//  await this.setState({ inc: this.state.inc + 1 });
//   console.log(this.state.inc);
// }

// handleClick = () => {
//   this.setState({ inc: this.state.inc + 1 })
//   console.log(this.state.inc);
// }

//   render() {
//     return (
//       <div className="boxes">
//         <h1>{this.state.inc}</h1>
//         <button onClick={this.handleClick}>Click</button>
//       </div>
//     )
//   }
// }



// FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS - FORMS
// import Formulario01 from './forms/Formulario01';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       password: '',
//       check: false,

//     }
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   }


//   constructor(props) {
//     super(props);
//     this.state = { adress: "", number: "" };
//   }

//   changeNumber = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submit = e => {
//     e.preventDefault();
//     this.props.enviar(this.state);
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <h2>Formulário</h2>
//           <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
//           <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
//           <button type="submit">Enviar</button>
//         </form>



//         <form onSubmit={this.submit} className="bordas">
//           <input
//             type="text"
//             name="adress"
//             value={this.state.adress}
//             onChange={this.changeNumber}
//             placeholder="Adress"
//           />
//           <input
//             placeholder="Number"
//             type="text"
//             name="number"
//             value={this.state.number}
//             onChange={this.changeNumber}
//           />
//           <button>Enviar</button>
//         </form>


//         <Formulario01 change={this.handleChange} name={this.state.name} password={this.state.password} submit={this.handleSubmit} check={this.state.check} />
//       </div>
//     )
//   }
// }



// TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP
// TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP - TODO APP
// import Todo from './projects/todo_app/Todo';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tarefas: [{ id: Math.random(), fazer: '' }]
//     }
//   }

//   addTarefas = (tarefa) => {
//     let tarefas = [...this.state.tarefas, tarefa];
//     // let tarefas = this.state.tarefas.push(tarefa);
//     this.setState({ tarefas });
//   }

//   render() {
//     return (
//       <>
//         {this.state.tarefas.map((el, ind) => <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }} key={ind}>{el.fazer}</h1>)}
//         <Todo tarefas={this.addTarefas} />
//       </>
//     )
//   }
// }



// TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND
// TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND
// import FormComBack from './forms/FormComBack';
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itens: []
//     }
//   }

//   componentDidMount() {
//     fetch('http://localhost:3003/')
//       .then(data => data.json())
//       .then(itens => this.setState({ itens }))
//   }

//   addItens = (item) => this.setState({ itens: [...this.state.itens, item] })

//   render() {
//     return (
//       <div>
//         <FormComBack addItens={this.addItens} />
//         {this.state.itens.map((el, ind) => <li
//           style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '2rem' }}
//           key={ind}>{el.nome} - R${el.preco},00</li>)}
//       </div>
//     )
//   }
// }
// TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND
// TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND - TODO APP COM BACKEND





// REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX
// REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX
// REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX
export default class App extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}
// REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX
// REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX
// REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX - REDUX
