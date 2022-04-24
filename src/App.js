// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
import ReactECharts from 'echarts-for-react';
const r=(a,b)=>{
  return Math.floor(Math.random() * (b - a + 1) ) + a;
}
function App() {
  const options = {
    // grid: { top: '80em', right: '100em', bottom: '80em', left: '100em' },
    xAxis: [{
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    }],
    yAxis: [{
      name:'Precipitation ',
      type: 'value',
      axisLabel: {
        formatter: `{value} ml`
      }
    },{
      name:'Temperature',
      type:'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    }],
    legend: {
      data : [ 'Evaporation','Precipitation','Temperature'] 
    },
    series: [
      {
        name:'Evaporation',
        data: Array.from({length:7},()=>r(30,250)),
        type: 'bar',
      },
      {
        name:'Precipitation',
        data: Array.from({length:7},()=>r(30,250)),
        type: 'bar',
      },
      {
        yAxisIndex:1,
        name:'Temperature',
        data: Array.from({length:8},()=>r(10,25)),
        type: 'line',
        
        // smooth: true,
      },
    ],
    
  };

  return <ReactECharts option={options} />;
}

export default App;
