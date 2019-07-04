import React, { PureComponent } from 'react'
import axios from 'axios'


import logo from '../../image/logo2x.png';
import veryhappe from './img/inlove.png'
import happy from './img/happy.png'
import sad from './img/sad.png'
import tja from './img/thinking01.png'
import verysad from './img/angry.png'
import './index.css'


export default class Rating extends PureComponent {
  handleClick(){
    console.log ('the value is', this);
  }
  constructor(){
    super();
    this.state ={
      isDisable: true,
      id: 0,
      smiley: [],
      message:null,
      verysad: 0,
      sad: 0,
      tja: 0,
      happy:0,
      veryhappy: 0,
      click: 0,
      sum: 0,
      rate: 0,
    }

    this.clickVerySadOne = this.clickVerySadOne.bind(this);
    this.clickSadOne = this.clickSadOne.bind(this);
    this.clicktjaOne = this.clicktjaOne.bind(this);
    this.clickHappyOne = this.clickHappyOne.bind(this);
    this.clickVeryHappyOne = this.clickVeryHappyOne.bind(this);
    this.onSubmint = this.handleSubmit.bind(this);
  }

clickVerySadOne(){
  this.setState({
    verysad: this.state.verysad + 1,
    click: this.state.click + 1
  });
}

clickSadOne(){
  this.setState({
    sad: this.state.sad + 2,
    click: this.state.click + 1
  });
}

clicktjaOne(){
  this.setState({
    tja: this.state.tja + 3,
    click: this.state.click + 1
  });
}

clickHappyOne(){
  this.setState({
    happy: this.state.happy + 4,
    click: this.state.click + 1
  });
}

clickVeryHappyOne(){
  this.setState({
    veryhappy: this.state.veryhappy + 5,
    click: this.state.click + 1
  });
}

Resualt(){
this.setState({ isDisable: !this.state.isDisable})
}

hide(){
this.setState({ isDisable: true})
}

sendData(){
      this.setState({
        verysad:  this.state.verysad,
        sad: this.state.sad / 2,
        tja: this.state.sad / 2,
        happy: this.state.happy / 4,
        veryhappy: this.state.veryhappy / 5,
        click: this.state.click,
        sum: this.state.verysad + this.state.sad + this.state.tja + this.state.happy + this.state.veryhappy,
        rate: this.state.sum / this.state.click,
      })
}



  render() {

    const sum =  this.state.verysad + this.state.sad + this.state.tja + this.state.happy + this.state.veryhappy

    const sadclick = this.state.sad / 2
    const tjaclick = this.state.tja / 3
    const happyclick = this.state.happy / 4
    const veryhappyclick = this.state.veryhappy / 5

    const totaltClick = this.state.click

    const rate = sum / totaltClick


    const smil = [ this.state.verysad, this.state.sad, this.state.tja, this.state.happy, this.state.veryhappy, this.state.click, this.state.rate, this.state.sum ]
    const myJson = JSON.stringify(smil);

    return(
      <div class='fix'>
      <header>
      <img class='logo' src={logo} alt="Logo" />

      <h1 class='it'> IT-Afsnittet </h1>

      <div class='but'>
      <p  onClick={this.Resualt.bind(this)}> dette </p>
      </div>



      </header>


    <content class='container'>

             <h2> Hvordan har din betjening været i dag? </h2>

      <div>
      <input class='img angry' type="image" src={verysad} name='' alt='angry' value='1' onClick={this.clickVerySadOne} onChange={this.handleSmileyClick} id='angry' />


      <input class='img sad' type="image" src={sad} alt='sad' value='2' onClick={this.clickSadOne} onChange={this.handleSmileyClick} id='angry'  />


      <input class='img tja' type="image" src={tja} alt='tja' value='3' onClick={this.clicktjaOne} onChange={this.handleSmileyClick} id='angry' />

      <input class='img happy' type="image" src={happy} alt='happy' value='4' onClick={this.clickHappyOne} onChange={this.handleSmileyClick} id='angry' />

      <input class='img veryhappy' type="image" src={veryhappe} alt='veryhappy' value='5' onClick={this.clickVeryHappyOne} onChange={this.handleSmileyClick} id='angry'  />

      </div>


      {(console.log('todays click: ' + totaltClick))}
      {(console.log('todays sum: ' + sum))}
      {(console.log('todays rate 1-5: ' + rate.toFixed(1)))}
        {(console.log('todays body: ' ))}

      {!this.state.isDisable &&   <div class='todays' >
          <p>Rate siden sidste reset {rate.toFixed(1)} </p><br />
          <p>Click siden sidste reset {totaltClick} </p><br />
            <p>Sum siden sidste reset {sum} </p><br />
            <p>Angry Click siden sidste reset {this.state.verysad} </p><br />
            <p>Sad Click siden sidste reset {sadclick} </p><br />
            <p>Tja Click siden sidste reset {tjaclick} </p><br />
            <p>Happy Click siden sidste reset {happyclick} </p><br />
            <p>VeryHappy Click siden sidste reset {veryhappyclick} </p>

            <input type="button" value="hide" class='hide' onClick={this.hide.bind(this)} />
              <input type="button" onChange={this.handleSubmit} />

            <form onSubmit={this.onSubmit}>
            <button type='submit'  > Reset </button>
             </form>
          </div> }
            {(console.log('todays verysadclick: ' + this.state.verysad))}
            {(console.log('todays sadclick: ' + sadclick))}
            {(console.log('todays tjaclick: ' + tjaclick))}
            {(console.log('todays happyclick: ' + happyclick))}
            {(console.log('todays veryhappyclick: ' + veryhappyclick))}


  </content>
      </div>
    )

  }

}
changeHandler(e){

}

handleSubmit(e){
  e.preventDefault();
  var d = this;
  fetch('http://localhost:9000/Data//createData', {
    method: 'POST',
    data: {
      verysad:  d.state.verysad,
      sad: d.state.sad,
      tja: d.state.tja ,
      happy: d.state.happy,
      veryhappy: d.state.veryhappy,
      click: d.state.click,
      sumsum: d.state.sum,
      rate: d.state.rate,
    }
  })
  .then(function(response){
    return response.json()
  }).then(function(body){
    console.log(body)
  })
}
