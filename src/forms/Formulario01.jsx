import React from 'react'
import './style.css';

export default function Formulario01({ change, name, password, submit, check }) {

     return (
          <form onSubmit={submit}>
               <h2>Formulário</h2>
               <input type="text" name="name" value={name} onChange={change} />
               <input type="password" name="password" value={password} onChange={change} />
               <input type="checkbox" name="check" checked={check} onChange={change} />
               <button type="submit">Enviar</button>
          </form>
     )
}
