
import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    //Retorno que se va a renderizar
    return(
        <div className='bienvenidos'>
            Aqui va el ItemListContainer: {props.bienvenidos}
        </div>
    )
    
}

export default ItemListContainer
