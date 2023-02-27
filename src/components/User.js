import React from 'react';

function User(props){

    const img = `http://localhost:3001/images/users/${props.image}`

    return(
        <React.Fragment>
            <article className='card'>
                <img src={img} alt="imagen" className='imagen-producto'/>
                <h6 className='titulo-producto'> {props.name}</h6>
                <p className='description-producto'>{props.last_name}</p>
                <p className='description-precio'>Email: {props.email}</p>
                <p className='description-precio'>Direccion: {props.adress}</p>
                <p className='description-precio'>Telefono: {props.cell_phone} </p>
            </article>
        </React.Fragment>
    )
}
export default User;