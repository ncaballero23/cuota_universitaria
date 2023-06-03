import { useState } from 'react'
import DragArea from './assets/DragArea'
import './App.css'
import { OrdenMatricula } from './OrdenMatricula'


function App() {
  return (
    <>
    <section className='grid-box'>
      <div className='content box-01'>
        <p>
          <h3>
            ¿Ya tienes tu orden de matricula?
          </h3>
          <label>
            Recuerda, solo se formalizará el resultado cuando subas este documento
          </label>
        </p>
      </div>
      <div className='content box-02'>
        <DragArea/>
      </div>
      
      <div className='content box-03'>
        <h3>
          ¿Cual es el valor de tu matricula?
        </h3>
      </div>
      <div className='content box-04'>
        <input type="text" placeholder='$0'/>
      </div>
      <div className='content box-05'>
        <h5>
          *Recuerda tener en cuenta todos los valores que se describen en la orden de matricula
        </h5>
      </div>

      <div className='content box-06'>
        <h3>
          ¿Cual es el valor que necesita financiar?
        </h3>
      </div>
      <div className='content box-7'>
        <input type="text" placeholder='$0'/>
      </div>
      <div className='content box-08'>
        <h5>
          valor solicitado para el estudio $10.000.000
          <br />
          *Este valor no podrá ser modificado mas de un 10%
        </h5>
      </div>

      <div className='content box-09'>
        <h3>
          ¡Llegó el momento de calcular el tiempo y cuota de tu financiación!
        </h3>
      </div>
      <div className='content box-10'>
        <button onClick={OrdenMatricula}>Calcular</button>
      </div>

      <div className='content box-11'>
        <h3>
          Seleccione el plazo en la barra y visualiza el valor apropiado de tu cuota mansual
        </h3>
      </div>
    </section>   
    </>
  )
}

export default App