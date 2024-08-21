import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Cogs = () => {
  const options = {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: ''
    },
    credits: {
        href: '',
        mapText: '',
        enabled: false,
    },
    subtitle: {
        align: 'left',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
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
            borderWidth: 0,
            borderRadius: 0
        },
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '<span style="font-size:9px;">{point.y:.1f}</span>'
            }
        }
    },
    tooltip: {
        //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        headerFormat: '',
        pointFormat: '<span style="color:{point.color};font-size:11px;"><b>{point.y:.0f}1%</b></span>'
    },
    series: [
        {
            name: 'COGS',
            colorByPoint: true,
            data: [
                {
                    name: '2023',
                    y: 20.2,
                    drilldown: '2023',
                    color:'#183ea3'
                },{
                    name: '2024',
                    y: 9.8,
                    drilldown: '2024',
                    color:'#183ea3'
                },{
                    name: '2025',
                    y: 25.2,
                    drilldown: '2025',
                    color:'#183ea3'
                },{
                    name: '2026',
                    y: 47.1,
                    drilldown: '2026',
                    color:'#183ea3'
                },{
                    name: '2027',
                    y: 55.3,
                    drilldown: '2027',
                    color:'#183ea3'
                },{
                    name: '2028',
                    y: 68.5,
                    drilldown: '2028',
                    color:'#183ea3'
                }
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
            Cogs
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

export default Cogs;
