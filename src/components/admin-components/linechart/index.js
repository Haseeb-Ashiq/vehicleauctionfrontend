import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJs,
    LineElement,
    PointElement,
    Legend,
    CategoryScale,
    LinearScale,
    Tooltip
}
from 'chart.js';

ChartJs.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend,
    Tooltip
);

const LineChart =()=>{
    return (<>
    <Line
    data={{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets:[
            {
             label:'Amounts of Months ($)',
             data:[500,300,444,555,666,777,444,4433,222,3333,555,555],
             backgroundColor:[
                 'green'
             ],
             borderWidth:2
        }
    ]
    }}
    height={400}
    width={300}
    options={{
        maintainAspectRatio:false,
           legend:{
               labels:{
                   fontSize:25
               }
           }
    }}
    />
    </>)
}
export default LineChart;