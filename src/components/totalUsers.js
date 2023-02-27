import React from 'react';

function TotalUsers(props){

    return(
        <React.Fragment>
            <article className='card'>
            <h6 className='titulo-producto'>Total de Usuarios</h6>
                <h6 className='titulo-producto'>{props.count}</h6>
            </article>
        </React.Fragment>
    
    )
}
export default TotalUsers;