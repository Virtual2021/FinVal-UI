import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const NetProfit = () => {
    const options = {
        chart: {
            zooming: {
                type: 'xy'
            }
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false,
        },
        legend: {
            enabled: false
        },
        xAxis: [{
            categories: [
                '2023', '2024', '2025', '2026', '2027', '2028'
            ],
            crosshair: true,
            labels: {
                style: {
                    fontSize: '10'
                }
            }
        }],
        yAxis: [{ // Primary yAxis
            title: {
                text: ''
            },
            labels: {
                format: '{value}',
                enabled: false
            },
            visible: false
        }, { // Secondary yAxis
            title: {
                text: ''
            },
            labels: {
                format: '{value}',
                enabled: false
            },
            visible: false
        }],
        tooltip: {
            shared: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                borderRadius: 0
            }
        },
        series: [{
            name: '',
            type: 'column',
            yAxis: 1,
            data: [
                9.20, 17.84, 21.18, 34.12, 42.33, 49.45
            ],
            color:'#183ea3',
            tooltip: {
                //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                headerFormat: '',
                pointFormat: '<span style="color:{point.color};font-size:11px;"><b>{point.y:.0f}1%</b></span>'
            },
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '<span style="font-size:9px;">{point.y:.1f}</span>'
            }
        },{
            name: '',
            type: 'spline',
            yAxis: 1,
            data: [
                {
                    y: 15.30,
                    color:'#021a5b'
                },{
                    y: 27.84,
                    color:'#021a5b'
                },{
                    y: 31.18,
                    color:'#021a5b'
                },{
                    y: 44.12,
                    color:'#021a5b'
                },{
                    y: 60.33,
                    color:'#021a5b'
                },{
                    y: 70.45,
                    color:'#021a5b'
                } 
            ],
            marker:{
                symbol:'diamond'
            },
            tooltip: {
                //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                headerFormat: '',
                pointFormat: '<span style="color:{point.color};font-size:11px;"><b>{point.y:.0f}2%</b></span>'
            },
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '<span style="font-size:9px;">{point.y:.1f}</span>'
            }
        }]
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
    
    return(
        <div class="col-sm-4 pe-5px">
            <div class="card mt-15px rounded-bottom-0 border-0 box-shadow">
                <div class="card-header fw-700 fs-14 ps-10px pb-0 pt-5px mb-0 h-40px lh-normal border-0 bg-white text-blue">Net Profit<span class="fst-italic fw-500 fs-12 ms-1">(USD million)</span> & <br/>Net Profit Margin<span class="fst-italic fw-500 fs-12 ms-1">(%)</span></div>
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

export default NetProfit;