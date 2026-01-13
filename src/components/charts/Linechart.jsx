import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext.js'
import '../../styles/componentsCss/LineChart.css'

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const LineChart = () => {

  const {patientdata} = useContext(AppContext);
  if(!patientdata){
    return <p>Loading</p>
  }

  const [labelFontSize, setLabelFontSize] = useState(12);
  const [marginLeft, setMarginleft] = useState("2vh");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setLabelFontSize(7);    
      } else if (width <= 768) {
        setLabelFontSize(8);
        setMarginleft("0vh");
      } else if (width <= 1024) {
        setLabelFontSize(9);
        setMarginleft("1vh");
      } else if (width <= 1440) {
        setLabelFontSize(11);
        setMarginleft("2vh");
      } else {
        setLabelFontSize(12);   
        setMarginleft("2vh");
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const six_data= patientdata[3].diagnosis_history.slice(0,6).reverse();

  const systolicData = six_data.map(iter => iter.blood_pressure.systolic.value);
  const diastolicData = six_data.map(iter => iter.blood_pressure.diastolic.value);
  
  console.log(six_data);

  const data = {
    labels: ["Oct 2023", "Nov 2023", "Dec 2023", "Jan 2024", "Feb 2024", "Mar 2024"],
    datasets: [
      {
        data: systolicData,
        borderColor: "#E66FD2",
        borderWidth: 2,
        tension: 0.4, 
        pointBackgroundColor: "#E66FD2",
      },
      {
        data: diastolicData,
        borderColor: "#8C6FE6",
        borderWidth: 2,
        tension: 0.4, 
        pointBackgroundColor: "#8C6FE6",
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: false },   
      tooltip: {
        enabled: true
      },
      
    },

    scales: {
      x: {
        grid: {
          display: false    
        },
        ticks: {
          font: { size: labelFontSize },
          
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: "#E6E6E6", 
        },
        ticks: {
          font: { size: labelFontSize },
          
        },
      }
    }
  };

  return <div style={{
  height: "25vh",
  width: "32vw",
  marginLeft: marginLeft,
  background:"transparent"
}}>
  <Line data={data} options={options} style={{ background: "transparent" }}/>
</div>
};

export default LineChart;
