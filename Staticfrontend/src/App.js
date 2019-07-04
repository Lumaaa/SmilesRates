import React from 'react';

import Header from './components/header'

import Graf from './components/graph'
import ShowSmileyClick from './components/showSmileyclick'

import './App.css';



function App() {


  return (
    <div>
    <Header />


    <div className='container'>

        <Graf  className='item' />
        <ShowSmileyClick className='item02' />
    </div>


    </div>
  );
}

export default App;

// {data.map((item, i) =>(
//     <Graf {...item} key={i} class='item' />
// ))}
