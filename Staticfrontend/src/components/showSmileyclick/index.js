import React, { PureComponent } from 'react'
import Chart from 'react-google-charts';
import './styles.css'

export default class ShowSmileyClick extends PureComponent {

    constructor(){
      super();
      this.state ={
        smileys: []
      };
    }

    componentDidMount(){
      fetch('http://localhost:9000/Data//getAllData')
      .then(results => results.json())
      .then(data => this.setState({smileys: data}))
    }


  render(){

    const musA = this.state.smileys.map((item)=> item.verysad,)[this.state.smileys.length -1];
    const catA = this.state.smileys.map((item)=> item.verysad,)[this.state.smileys.length -2];
    const musB = this.state.smileys.map((item)=> item.sad,)[this.state.smileys.length -1];
    const catB = this.state.smileys.map((item)=> item.sad,)[this.state.smileys.length -2];
    const musC = this.state.smileys.map((item)=> item.tja,)[this.state.smileys.length -1];
    const catC = this.state.smileys.map((item)=> item.tja,)[this.state.smileys.length -2];
    const musD = this.state.smileys.map((item)=> item.happy,)[this.state.smileys.length -1];
    const catD = this.state.smileys.map((item)=> item.happy,)[this.state.smileys.length -2];
    const musE = this.state.smileys.map((item)=> item.veryhappy,)[this.state.smileys.length -1];
    const catE = this.state.smileys.map((item)=> item.veryhappy,)[this.state.smileys.length -2];

    return(
      <div>
      <h2 className="siden"> Siden sidste reset </h2>

      <div className='giraf'>



          <Chart

          width={700}
          height={300}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Smiley', 'Denne Uge', 'last week'],
            ['Verysad', musA, catA],
            ['sad', musB, catB],
            ['tja', musC, catC],
            ['Happy', musD, catD],
            ['Veryhappy', musE, catE],
          ]}
          options={[
            { title: 'Smiley',
            chartArea: { width: '100%'},
            hAxis: {
              minValue: 0
            },
            vAxis: {
              title: 'Number',
            },}
          ]}
          legendToggle

          />

      </div>
      </div>
    )

  }
}
