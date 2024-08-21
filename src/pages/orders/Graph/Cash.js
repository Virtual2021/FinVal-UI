import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Cash = () => {
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
                format: '<span style="font-size:9px;">{point.y:.1f}</span>'
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Cash',
        marker:{
            symbol:'square'
        },
        data: [
            {
                name: '2023',
                y: 24.2,
                drilldown: '2023',
                color:'#021a5b'
            },{
                name: '2024',
                y: 39.4,
                drilldown: '2024',
                color:'#021a5b'
            },{
                name: '2025',
                y: 26.7,
                drilldown: '2025',
                color:'#021a5b'
            },{
                name: '2026',
                y: 29.3,
                drilldown: '2026',
                color:'#021a5b'
            },{
                name: '2027',
                y: 33.6,
                drilldown: '2027',
                color:'#021a5b'
            },{
                name: '2028',
                y: 30.5,
                drilldown: '2028',
                color:'#021a5b'
            }
        ]
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
        <div class="col-sm-4 ps-5px">
            <div class="card mt-15px rounded-bottom-0 border-0 box-shadow">
                <div class="card-header fw-700 fs-14 ps-10px pb-0 pt-5px mb-0 h-40px lh-normal border-0 bg-white text-blue">Cash<span class="fst-italic fw-500 fs-12 ms-1">(USD million)</span></div>
                <div class="card-body p-0 overflow-hidden">
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