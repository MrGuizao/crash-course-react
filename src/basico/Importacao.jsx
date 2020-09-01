import React from 'react';
import './style.css';


function Importacao() {
     return (
          <div>
               <h1>Hell world 1</h1>
          </div>
     )
}

function Importacao2() {
     return (
          <div>
               <h1>Hell world 2</h1>
          </div>
     )
}
function Importacao3() {
     return (
          <div>
               <h1>Hell world 3</h1>
          </div>
     )
}

// pode mudar o nome
export default function Importacao4() {
     return (
          <div>
               <h1>Hell world 4</h1>
          </div>
     )
}

export { Importacao, Importacao2, Importacao3 };