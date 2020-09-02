import React, { Component } from 'react'

class MultipleClasses extends Component {
     constructor(props) {
          super(props);
          this.state = {
          }
     }
     render() {
          return (
               <div>
                    <h1>A God has Compassion</h1>
               </div>
          )
     }
}


class MultipleClasses2 extends Component {
     constructor(props) {
          super(props);
          this.state = {

          }
     }

     render() {
          return (
               <div>
                    <h1>A God has no Ego</h1>
               </div>
          )
     }
}


class MultipleClasses3 extends Component {
     constructor(props) {
          super(props);
          this.state = {

          }
     }
     render() {
          return (
               <div>
                    <h1>A God has Discipline</h1>
               </div>
          )
     }
}

export default class extends Component {
     render() {
          return (
               <div>
                    <h1>A God has EVERYTHING</h1>
               </div>
          )
     }
}

export { MultipleClasses, MultipleClasses2, MultipleClasses3 };