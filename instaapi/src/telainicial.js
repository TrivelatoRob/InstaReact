import React from 'react'
import Menu from './menu/Menu'
import Feed from './feed/bosta'
import './telainicial.css'


function TelaInicial(){
    return(
        <div className='home'>
            <div className='menu'>
                <Menu />
            </div>
            <div className='feed'>
                <Feed />
            </div>
        </div>
    )
}

export default TelaInicial  