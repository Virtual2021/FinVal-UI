import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SalesChart = () => {
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
          fontSize: '10px'
        }
      }
    },
    yAxis: {
      min: 0,
      max: 0.6,
      title: {
        text: ''
      },
      labels: {
        enabled: false
      },
      visible: false
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
          format: '<span style="font-size:9px;">{point.y:.2f}</span>'
        },
        tooltip: {
          pointFormat: '<span style="color:{point.color};font-size:11px;"><b>{point.y:.2f}%</b></span>'
        }
      }
    },
    series: [
      {
        name: 'Back',
        colorByPoint: true,
        pointPlacement: 0,
        data: [
          { name: '2023', y: 1, drilldown: '2023', color: '#deebf7' },
          { name: '2024', y: 1, drilldown: '2024', color: '#deebf7' },
          { name: '2025', y: 1, drilldown: '2025', color: '#deebf7' },
          { name: '2026', y: 1, drilldown: '2026', color: '#deebf7' },
          { name: '2027', y: 1, drilldown: '2027', color: '#deebf7' },
          { name: '2028', y: 1, drilldown: '2028', color: '#deebf7' }
        ],
        dataLabels: {
          enabled: false
        },
        enableMouseTracking: false
      },
      {
        name: 'SALES',
        colorByPoint: true,
        data: [
          { name: '2023', y: 0.09, drilldown: '2023', color: '#183ea3' },
          { name: '2024', y: 0.18, drilldown: '2024', color: '#183ea3' },
          { name: '2025', y: 0.21, drilldown: '2025', color: '#183ea3' },
          { name: '2026', y: 0.34, drilldown: '2026', color: '#183ea3' },
          { name: '2027', y: 0.42, drilldown: '2027', color: '#183ea3' },
          { name: '2028', y: 0.49, drilldown: '2028', color: '#183ea3' }
        ]
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
      <div className="col-sm-6 pe-5px">
        <div className="card mt-15px rounded-bottom-0 border-0 box-shadow">
          <div className="card-header fw-700 fs-14 ps-10px pt-5px pb-0 mb-0 lh-normal border-0 bg-white text-blue">
            Sales
            <span className="fst-italic fw-500 fs-12 ms-1">(USD million)</span>
          </div>
          <div className="card-body p-0 overflow-hidden">
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              containerProps={{ style: containerStyle }}  // Apply the style here
            />
          </div>
        </div>
      </div>
  );
};

export default SalesChart;
