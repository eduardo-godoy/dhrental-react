import React from 'react';

function Product(props){

    const img = `http://localhost:3001/images/products/${props.image}`

    return(
        <React.Fragment>
            <article className='card'>
                <img src={img} alt="imagen" className='imagen-producto'/>
                <h6 className='titulo-producto'>{props.name}</h6>
                <p className='description-producto'>{props.description}</p>
                <p className='description-precio'>Precio: ${props.price}</p>
            </article>
        </React.Fragment>
    )
}
export default Product;