import React, { useState, useEffect } from 'react';
import { csv } from 'd3';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);
// const row = (d) => {
//   d.average = +d.average;
//   return d;
// };
function Updates() {
  // const data1 = [
  //   { argument: 'abhi', value: 30 },
  //   { argument: 'jatin', value: 20 },
  //   { argument: 'dheeraj', value: 10 },
  //   { argument: 'shivani', value: 50 },
  //   { argument: 'shahbaz', value: 60 },
  // ];
  const [data, setData] = useState([]);
  const [Name, setName] = useState([]);
  const [Average, setAverage] = useState([]);
  useEffect(() => {
    csv(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vRErAKjNNlRqUNxZNK10TjaPH0U2ukceAR__3Raycksl2KCK5wR8nGNl-REuT_cVjhBqhTTumn9LPCV/pub?gid=0&single=true&output=csv',
    ).then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);
  useEffect(() => {
    var temp = [];
    for (var i = 0; i < data.length; i++) {
      temp.push(data[i].Name);
    }
    var temp2 = [];
    for (var j = 0; j < data.length; j++) {
      temp2.push(parseInt(data[j].total));
    }
    setName(temp);
    setAverage(temp2);
  }, [data]);
  const options = {
    responsive: true,
    scales: {
      y: {
        max: 180,
        min: 0,
        ticks: {
          stepSize: 10,
        },
      },
    },
    plugins: {
      
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
        
      },
      
    },
    
  };
  const labels = Name;
  const data1 = {
    labels,
    datasets: [
      {
        borderDash: [5, 5],
        barPercentage: 0.5,
        label: 'Value',
        data: Average,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const option1={
    plugins:{ChartDataLabels}

  }
   const data2 = {
    labels: Name,
    datasets: [
      {
        label: '# of Votes',
        data: Average,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{
        alignItems: 'center',
        height: '100%',
        width: '1850px',
        marginTop: '3%',
      }}
    >
      <h1>Updates</h1>
      <div style={{
        alignItems: "center",
        height: "100%",
        width: "1850px",
        marginTop: "3%",
      }}>
      <Grid container spacing={4}>
          <Grid item xs={5}>
        <Bar options={options} data={data1} />
        </Grid>
        <Grid item xs={5}>
        <Pie options={option1} data={data2} />
        </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Updates;






