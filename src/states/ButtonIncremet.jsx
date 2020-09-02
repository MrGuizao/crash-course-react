import React from 'react'

export default function ButtonIncremet({ btnClick, increment, label }) {
     return (
          <>
               <h1 style={{ color: 'red' }}>Ola mundo maior que {increment}</h1>
               {/* <input type="text" onChange={label}/> */}
               <button onClick={btnClick}>Click me</button>
          </>
     )
}
