import React from 'react';
import './style.css';

export default function ({ nome, id }) {
     return (
          <article>
               {
                    id % 2 === 0 ? <p className="par">{id}: {nome}</p> : <p className="impar">{id}: {nome}</p>
               }
          </article>
     )
}
