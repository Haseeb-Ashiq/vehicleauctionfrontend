import React from 'react';
import {Pie,Doughnut} from 'react-chartjs-2';
import {
    Chart as ChartJs,
    ArcElement,
    Legend,
    Tooltip
}
from 'chart.js';
ChartJs.register(
    ArcElement,
    Legend,
    Tooltip
);

const PieChart = () => {
return (<>
<Doughnut
data={{
    labels:['Jan','Jul','Aug'],
    datasets:[
        {
            label:'Sales of product',
            data:[4,7,3],
    backgroundColor:['red','yello','orange'],
    borderWidth:2
        }
    ]
    
}}
height={50}
width={50}
options={{
    legend:{
        labels:{
            fontSize:25
        }
    }
}}
/>
</>)
}
export default PieChart;