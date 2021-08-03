import React from 'react'
import { Line } from 'react-chartjs-2';


const ChartLine = () => {
  const data = {
    labels: ["7/01/2010", "7/02/2010", "7/03/2010", "7/04/2010"],
    datasets: [
      {
        label: "Order Amount",
        data: [20000,30000,22000,45000],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "royalblue"
      },
     
    ]
  };

    return (
        <div className="chart" >
          <Line data={data} />
           
        </div>
    );
}

export default ChartLine;
