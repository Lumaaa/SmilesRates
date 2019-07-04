import React, { PureComponent } from 'react'
import Chart from 'react-google-charts';


import './styles.css'

export default class Graf extends PureComponent {
  constructor(){
    super();
    this.state ={
      day: 'Dag',
      week: 'Uge ',
      mounth: 'Måned',
      year:'År ',
      rate: [],
      totalClick: 'totalClick',
      sum: 'sum'

    }
  }

    componentDidMount(){

      fetch('http://localhost:9000/Data//getAllData')
      .then(results => results.json())
      .then(data => this.setState({rate: data}))

    }



sum(){
}



  render(){


const musA = this.state.rate.map((item)=> item.sumsum,)[this.state.rate.length -1];
const catA = this.state.rate.map((item)=> item.sumsum,)[this.state.rate.length -2];
const musB = this.state.rate.map((item)=> item.click,)[this.state.rate.length -1];
const catB = this.state.rate.map((item)=> item.click,)[this.state.rate.length -2];
const musC = this.state.rate.map((item)=> item.rate,)[this.state.rate.length -1];
const catC = this.state.rate.map((item)=> item.rate,)[this.state.rate.length -2];

    return(

<div>

    <h2 className="siden"> Siden sidste reset </h2>

      <div className='giraf'>
                <Chart
                width={500}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Smiley', 'Denne Uge', 'sidste uge'],
                  ['Sum', musA, catA,],
                ]}
                options={[
                  { title: 'Smiley',
                  chartArea: { width: '100%'},
                  hAxis: {
                    minValue: 0,
                  },
                  vAxis: {
                    title: 'Number',
                  },}
                ]}
                legendToggle
                />
                <Chart
                width={500}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Smiley', 'Denne Uge', 'sidste uge'],
                  ['click', musB, catB],
                ]}
                options={[
                  { title: 'Smiley',
                  chartArea: { width: '100%'},
                  hAxis: {
                    minValue: 0,
                  },
                  vAxis: {
                    title: 'Number',
                  },}
                ]}
                legendToggle
                />
                <Chart
                width={500}
                height={300}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Smiley', 'Denne Uge', 'sidste uge'],
                  ['Rate', musC, catC],
                ]}
                options={[
                  { title: 'Smiley',
                  chartArea: { width: '100%'},
                  hAxis: {
                    minValue: 0,
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
