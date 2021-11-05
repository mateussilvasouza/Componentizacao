import React from 'react';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import signos from '../data/dataSignos';

import './estilo.css';

export default function ListaDeSignos() {
  return (
    <div>
      <Titulo />

      <div className="lista">
        {signos.map(signo => {
          return(
            <ItemLista
              signo={signo.signo} dataInicio={signo.dataInicio}
              dataFim={signo.dataFim} imagem={signo.imagem} />
          )
        })}
      </div>
    </div>
  )
}