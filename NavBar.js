import React from 'react'
import './NavBar.css'

import CardWidget from '../cardWidget/CardWidget.js'

const NavBar = () => {

    return(
        <header className='navbar'>
        <h1 className='title'>Options</h1>
        <ul className='links'>
        
        <li><a href="index.html">Productos</a></li>
        
        <li><a href="index.html">Ofertas</a></li>
        
        <li><a href="index.html">Envios</a></li>
        </ul>
        <CardWidget cantidad="7"/>
        
      </header>
    )
    
}

export default NavBar
