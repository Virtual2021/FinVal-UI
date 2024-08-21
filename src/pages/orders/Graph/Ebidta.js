import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Ebidta = () => {
    const options = {
        chart: {
            type: 'bar'
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
            bar: {
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
            headerFormat: '',
            pointFormat: '<span style="color:{point.color};font-size:11px;"><b>{point.y:.2f}%</b></span>'
        },
        series: [
            {
                name: 'EBITDA',
                colorByPoint: true,
                data: [
                    {
                        name: '2023',
                        y: 7.20,
                        drilldown: '2023',
                        color:'#183ea3'
                    },{
                        name: '2024',
                        y: 13.84,
                        drilldown: '2024',
                        color:'#183ea3'
                    },{
                        name: '2025',
                        y: 18.18,
                        drilldown: '2025',
                        color:'#183ea3'
                    },{
                        name: '2026',
                        y: 37.12,
                        drilldown: '2026',
                        color:'#183ea3'
                    },{
                        name: '2027',
                        y: 50.33,
                        drilldown: '2027',
                        color:'#183ea3'
                    },{
                        name: '2028',
                        y: 59.45,
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
                <div class="card-header fw-700 fs-14 ps-10px pb-0 pt-5px mb-0 h-40px lh-normal border-0 bg-white text-blue">EBITDA<span class="fst-italic fw-500 fs-12 ms-1">(USD million)</span></div>
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

export default Ebidta;