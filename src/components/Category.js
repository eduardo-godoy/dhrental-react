import React from 'react';

function Categorys(props){

    return(
        <React.Fragment>
            <article className='card'>
                <h6 className='titulo-producto'> {props.name}</h6>
                <h6 className='titulo-producto'> {props.count}</h6>
            </article>
        </React.Fragment>
    
    )
}
export default Categorys;