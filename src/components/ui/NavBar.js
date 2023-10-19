import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar({ title }) {

    return (
        <div className="card text-center">
            <div className="card-header">
                <Link
                    to='/'
                    className='navbar-brand'
                    //Temas de accesibilidad con teclas TAB
                    tabIndex={0}
                    aria-label='Volver al inicio'
                >
                    {title}
                </Link>
                <ul className="nav nav-tabs card-header-tabs">
                    <NavLink
                        to='/directores'
                        tabIndex={1}
                        className='nav-item nav-link'
                    >
                        Directores
                    </NavLink>
                    <NavLink
                        to='/generos'
                        tabIndex={2}
                        className='nav-item nav-link'
                    >
                        Generos
                    </NavLink>
                    <NavLink
                        to='/medias'
                        tabIndex={3}
                        className='nav-item nav-link'
                    >
                        Medias
                    </NavLink>
                    <NavLink
                        to='/productoras'
                        tabIndex={4}
                        className='nav-item nav-link'
                    >
                        Productoras
                    </NavLink>
                    <NavLink
                        to='/tipos'
                        tabIndex={4}
                        className='nav-item nav-link'
                    >
                        Tipos
                    </NavLink>
                    <li class="nav-item">
                        <a class="nav-link disabled">Deshabilitado</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}