import './App.css'

export function OrdenMatricula() {
    return(
        <>
        <h3 className='informematricula'>Esta es la information de tu orden de matricula</h3>
        
        <section className="grid-box_">
            <div className='content ombx-01'>
                <label htmlFor="">N° Orden de matricula:</label>
            </div>
            <div className='content ombx-02'>
                <input type="text" />
            </div>

            <div className='content ombx-03'>
                <label htmlFor="">Fecha prevista del pago:</label>
            </div>
            
            <div className='content ombx-04'>
                <input type="text" />
            </div>
            
            <div className='content ombx-05'>
                <label htmlFor="">Matricula:</label>
            </div>
            
            <div className='content ombx-06'>
                <input type="text" />
            </div>
            
            <div className='content ombx-07'>
                <label htmlFor="">Valor a pagar:</label>
            </div>
            
            <div className='content ombx-08'>
                <input type="text" />
            </div>
        </section>
       
        <h3 className='calculadora'>Calculadora de finalizacion con Educación Estrella</h3>
        
        <section className='grid-box_'>        
            <div className='content ombx-09'>
                <label htmlFor="">¿Incluir el seguro de la Universidad en la financiación?</label>
            </div>
            
            <div className='content ombx-10'>
                <input type="text" name="" id="" />
            </div>
            
            <div className='content ombx-11'>
                <label htmlFor="">Valor base de la financiación:</label>
            </div>
            
            <div className='content ombx-12'>
                <input type="text" />
            </div>
           
            <div className='content ombx-13'>
                <label htmlFor="">Este es el 35% condonable:</label>
            </div>
            
            <div className='content ombr-14'>
                <input type="text" />
            </div>
            
            <div className='content ombx-15'>
                <label htmlFor="">Este es el 65% financiable</label>
            </div>
            
            <div className='content ombx-16'>
                <input type="text" />
            </div>
            
            <div className='content ombx-17'>
                <label htmlFor="">¿Cuanto necesitas que te financiemos?</label>
            </div>
            
            <div className='content ombx-18'>
                <input type="text" />
            </div>
        </section>
        
        <section className='_grid-box_'>
            <div className='content'>
                <label htmlFor="">¡Llegó el momento de calcular el tiempo y cuota de tu financiación!</label>
            </div>
            
            <div className='content'>
                <button>Calcular</button>
            </div>
        </section>
        </>
    )
}