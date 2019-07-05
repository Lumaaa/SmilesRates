import React, { PureComponent  } from 'react'

//change logo url til the right img
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
