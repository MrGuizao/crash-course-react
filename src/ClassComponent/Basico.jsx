import React, { Component } from 'react';
import './style.css';

export default class Basico extends Component {
     constructor(props) {
          super(props);
          this.state = {
               name: 'Barbara',
               igreja: this.props.teste,
          }
     }


     render() {
          const { name, igreja } = this.state;
          const { teste } = this.props;
          return (
               <div>
                    <h1>Ola {name}</h1>
                    <h1>{this.props.teste}</h1>
                    <h1>{teste}</h1>
                    <h1>{this.state.igreja}</h1>
                    <h1>{igreja}</h1>

               </div>
          )
     }
}