import React, { PureComponent } from 'react'
import PropTypes  from 'prop-types'

export default class Result extends PureComponent {
  constructor(){
    super();
    this.state ={
      rate: 0,
      click: 0,
      sum: 0,

      isDisable: false
    }
  }
  render(){

    const { rate, click, sum } = this.state
    return(
      <div class='t'>
      <p>Todays rate {rate.toFixed(1)} </p>
      <p>Todays Click {click} </p>
        <p>Todays sum {sum} </p>
        <form>
        <button type='submit'> Reset </button>
         </form>
      </div>
    )
  }
}
