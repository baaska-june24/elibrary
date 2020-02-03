import * as React from "react";
import { Line } from 'react-chartjs-2';


const Graph = (props: any) => {
  const data = {
    labels: ['1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7 ', '8 ', '9 ', '10 ', '11 ', '12 '],
    datasets: [
      {
        label: 'Сүүлийн 12 сарын борлуулалтын график',
        backgroundColor: 'rgba(234,121,65,0.5)',
        borderColor: 'rgba(234,121,65,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 115, 65, 59, 80, 81, 56]
      }
    ]
  };

  return (
    <>
      <Line
        data={data}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
    </>
  );

};

export default Graph;
