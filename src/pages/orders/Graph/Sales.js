import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import GraphHeading from '../form/GraphHeading';

const SalesChart = ({ data, finData, forecastData }) => {
  if (!finData || !finData.sales) {
    return null;
  }
  
  const { sales, year } = finData;

  // Function to format numbers with thousand separators and two decimal places
  const formatNumber = (number) => {
    return number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };
  
  let updatedSales = [...sales];

  // Find the index of the object with the matching label in forecastData
  const findMatchingForecast = (forecastData, searchString) => {
    for (let key in forecastData) {
      if (forecastData[key].label === searchString) {
        return forecastData[key];
      }
    }
    return null;
  };

  // Check if forecastData is present and contains the expected object
  if (forecastData) {
    const matchingForecast = findMatchingForecast(forecastData, "Forecasted Sales Growth Rate (Y-o-Y) (%)");

    if (matchingForecast) {
      const percentages = matchingForecast.values.map(value => parseFloat(value));
      let currentSales = sales[0];

      // Start calculating from the initial sales value
      updatedSales = [currentSales];

      // Iterate through each percentage and calculate new sales values
      percentages.forEach(percentage => {
        currentSales = currentSales * (1 + percentage / 100);
        updatedSales.push(currentSales);
      });
    }
  }  

  // Prepare the data for the chart
  const seriesData = year.map((yr, index) => ({
    name: yr,
    y: Number(updatedSales[index] || 0), // Use raw numeric value for charting
    drilldown: yr,
    color: '#183ea3'
  }));

  const maxSales = Math.max(...updatedSales);
  const maxSalesValue = maxSales * 1.5;

  const maxData = year.map((yr, index) => ({
    name: yr,
    y: Number(maxSalesValue || 0), // Use raw numeric value for charting
    drilldown: yr,
    color: '#deebf7'
  }));

  const options = {
    chart: {
      type: 'column'
    },
    title: {
      align: 'left',
      text: ''
    },
    credits: {
      enabled: false
    },
    subtitle: {
      align: 'left',
      text: ''
    },
    xAxis: {
      type: 'category',
      labels: {
        style: {
          fontSize: '10'
        }
      }
    },
    yAxis: {
      min: null, // Allow automatic scaling to include negative values
      title: {
        text: ''
      },
      labels: {
        enabled: false // Disable yAxis labels
      },
      visible: true // Ensure yAxis is visible
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        grouping: false,
        shadow: false,
        borderWidth: 0,
        borderRadius: 0
      },
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          formatter: function() {
            return `<span style="font-size:9px;"><b>${formatNumber(this.y)}</b></span>`;
          }
        },
        tooltip: {
          pointFormatter: function() {
            return `<span style="color:${this.color};font-size:11px;"><b>${formatNumber(this.y)}</b></span>`; // Use formatted value for tooltips
          }
        }
      }
    },
    series: [
      {
        name: 'Back',
        colorByPoint: true,
        pointPlacement: 0,
        data: maxData,
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: false
      },
      {
        name: 'SALES',
        colorByPoint: true,
        data: seriesData
      }
    ]
  };

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '359px',
    height: '170px',
    textAlign: 'left',
    lineHeight: 'normal',
    zIndex: 0,
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    userSelect: 'none',
    touchAction: 'manipulation',
    outline: 'none'
  };

  return (
    <>
      <div className="card-header fw-700 fs-14 ps-10px pt-5px pb-0 mb-0 lh-normal border-0 bg-white text-blue">
        Sales
        <GraphHeading data={data} finData={finData}/>
      </div>
      <div className="card-body p-0 overflow-hidden">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          containerProps={{ style: containerStyle }}  // Apply the style here
        />
      </div>
    </>
  );
};

export default SalesChart;
