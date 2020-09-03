import React, { Component } from 'react'

export default class FormComBack extends Component {
     constructor(props) {
          super(props);
          this.state = {
               nome: '',
               preco: null
          }
          // this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange = (e) => {
          this.setState({ [e.target.name]: e.target.value });
     }
     handleSubmit(e) {
          e.preventDefault();
          this.props.addItens(this.state);
     }

     // testeFetch = (e) => {
     //      e.preventDefault();
     //      fetch('http://localhost:3003/store', {
     //           method: 'POST',
     //           body: JSON.stringify({
     //                nome: this.state.nome,
     //                preco: this.state.preco
     //           }),
     //           headers: {
     //                "Content-type": "application/json; charset=utf-8;"
     //           }
     //      }).then(data => data.json())
     // }

     render() {
          return (
               <form onSubmit={this.handleChange}>
                    <input type="text" name="nome" value={this.state.content} onChange={this.handleChange} placeholder="Nome..." />
                    <input type="text" name="preco" value={this.state.content} onChange={this.handleChange} placeholder="Preco..." />
                    <button>Enviar</button>
               </form>
          )
     }
}
