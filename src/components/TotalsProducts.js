import React from 'react';

function totalsProducts(props){

    return(
        <React.Fragment>
            <article className='card'>
                <h6 className='titulo-producto'>Total de Productos</h6>
                <h6 className='titulo-producto'>{props.count}</h6>
                
            </article>
        </React.Fragment>
    
    )
}
export default totalsProducts;