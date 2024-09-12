import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import GraphHeading from '../form/GraphHeading';

const Cash = ({data, finData}) => {
    if (!finData || !finData.cashBalance) {
        return null;
      }
    
      const { cashBalance, year } = finData;
      
      // Function to format numbers with thousand separators and two decimal places
      const formatNumber = (number) => {
        return number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      };  
    
      // Prepare the data for the chart
      const seriesData = year.map((yr, index) => ({
        name: yr,
        y: Number(cashBalance[index]),
        drilldown: yr,
        color: '#021a5b'
      }));
    
  const options = {
    chart:{
        type:'spline'
    },
    title: {
        text: '',
        align: 'left'
    },
    credits: {
        href: '',
        mapText: '',
        enabled: false,
    },
    subtitle: {
        text: '',
        align: 'left'
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value}'
        },
        labels: {
            enabled: false
        },
        visible: false
    },
    xAxis: {
        type: 'category',
        labels: {
            style: {
                fontSize: '10'
            }
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2023,
            step:'left',
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return `<span style="font-size:9px;"><b>${formatNumber(this.y)}</b></span>`;
                  }
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Cash',
        marker:{
            symbol:'square'
        },
        data: seriesData,
    }],
  };

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: '232px',
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
        <div className="col-sm-4 ps-5px">
            <div className="card mt-15px rounded-bottom-0 border-0 box-shadow">
                <div className="card-header fw-700 fs-14 ps-10px pb-0 pt-5px mb-0 h-40px lh-normal border-0 bg-white text-blue">Cash
                    <GraphHeading data={data} finData={finData} />
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
    )
}

export default Cash;