import React, { Component } from 'react'

export default class LifeCicle extends Component {
     constructor(props){
          super(props);
          console.log('contructor');
          this.state = {
               nome: ''
          }
     }

     componentDidMount = () => {
          // this.setState({nome: 'Guilherme'});
          console.log('componentDidMount');
          
          // setTimeout(() => {
          //      console.log(this.state.nome);
          //      this.componentWillUnmount();
          // }, 3000);
     }
     componentDidUpdate = () => {
          console.log('componentDidUpdate');
     }
     componentWillUnmount = () => {
          // this.setState({nome: 'Limpo'});
          console.log("componentWillUnmount");
          // console.log(this.state.nome);
     }
     // static getDerivedStateFromProps = (props, state) => {
     //      return console.log(props, state);
     // }
     
     render() {
          console.log('render');
          return (
               <div>

               </div>
          )
     }
}
