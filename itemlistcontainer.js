
import React from 'react'
//Modulos
//Estilos
import './ItemListContainer.css'
//Componentes
//Core


//logica//

//Funcion constructora
const ItemListContainer = (props) => {
    //Retorno que se va a renderizar
    return(
        <div className='greeting'>
            Aqui va el ItemListContainer: {props.greeting}
        </div>
    )
    
}



export default ItemListContainer