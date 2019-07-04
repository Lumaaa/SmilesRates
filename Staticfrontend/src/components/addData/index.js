import React, { PureComponent } from 'react'

import './styles.css'

export default class AddData extends PureComponent {

  render(){
    return(
      <div className='addData'>
      <h2>Tilføj data </h2>
      <div className='center'>
      <form>

        Rate : <input type="text" name="rate" />
        <br /> <br />
        Click : <input type="text" name="click" />
        <br /> <br />
        Sum : <input type="text" name="sum" />
        <br /> <br />

        <button type='submit'> <b> Send </b> </button>
       </form>
       </div>
       </div>
    )
  }
}
