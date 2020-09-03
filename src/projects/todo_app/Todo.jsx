import React, { Component } from 'react'

export default class Todo extends Component {
     state = {
          fazer: '',
     }

     handleTarefa = event => {
          this.setState({ [event.target.name]: event.target.value })
     }

     submit = (event) => {
          event.preventDefault();
          this.props.tarefas(this.state);
          this.setState({ fazer: '' })
     }

     render() {
          return (
               <form onSubmit={this.submit} className="bordas">
                    <input
                         type="text"
                         name="fazer"
                         value={this.state.fazer}
                         onChange={this.handleTarefa}
                         placeholder="Tarefa..."
                    />
               </form>
          )
     }
}

