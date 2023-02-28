import React from 'react';

function Total(props){

    return(
        <React.Fragment>
            <article className='card'>
                <h6 className='titulo-producto'>Total de Categorias</h6>
                <h6 className='titulo-producto'>{props.count}</h6>
            </article>
        </React.Fragment>
    
    )
}
export default Total;