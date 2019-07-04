import React, { PureComponent  } from 'react'

import Logo from './img/logo.png'

import './styles.css'


export default class Header extends PureComponent  {

  render(){
    return(
      <header>

      <img src={Logo} alt={Logo} />


      </header>
    )
  }

}
