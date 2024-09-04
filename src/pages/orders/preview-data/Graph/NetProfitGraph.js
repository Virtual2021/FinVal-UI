import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CalculateGraphData } from '../../Graph/Calculation';
import GraphHeading from '../../form/GraphHeading';

const NetProfitGraph = ({data, finData, forecastData}) => {
    if (!finData || !finData.netProfit) {
        return null;
      }
    
      const { netProfit, year } = finData;
    
      // Check if the sales array is not blank and contains values greater than 0
      const isValidData = netProfit.length > 0;
    
      // If data is not valid, return null to render nothing
      if (!isValidData) {
        return null;
      }

    let updatedNetProfit = [...netProfit];
    
    let netProfitMargin = ( parseFloat(finData.netProfit) / parseFloat(finData.sales) ) * 100;
    
    let updatedNetProfitMarginPercent = [netProfitMargin];
    
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
    
        const matchingForecast = findMatchingForecast(forecastData, "Forecasted Net Profit Margin (%)");

        if (matchingForecast) {
            const percentages = matchingForecast.values.map(value => parseFloat(value));
            let currentNetProfit = netProfit[0];

            // Start calculating from the initial sales value
            updatedNetProfit = [currentNetProfit];

            let currentSales = finData.sales;
            let updatedSales = [currentSales];
            let matchSalesObject = findMatchingForecast(forecastData, "Forecasted Sales Growth Rate (Y-o-Y) (%)");
        
            let SalesPercentArray  = matchSalesObject ? matchSalesObject.values.map(value => parseFloat(value)) : [1,1,1,1,1];

            // Iterate through each percentage and calculate new sales values
            percentages.forEach((percentage, index) => {
                currentSales = CalculateGraphData(currentSales, SalesPercentArray[index]);
                currentNetProfit = (parseFloat(currentSales) * parseFloat(percentage)) / 100;
                updatedNetProfit.push(currentNetProfit);
                updatedNetProfitMarginPercent.push(percentage);
                updatedSales.push(currentSales);
            });
        }
    }  

    // Prepare the data for the chart
    const seriesData = year.map((yr, index) => ({
        name: yr,
        y: Number(updatedNetProfit[index]),
        drilldown: yr,
        color: '#183ea3'
    }));

    const waveData = year.map((yr, index) => ({
        name: yr,
        y: Number(updatedNetProfitMarginPercent[index]),
        drilldown: yr,
        color: '#183ea3'
    }));

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
            categories: year,
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
            data: waveData,
            color:'#183ea3',
            tooltip: {
                headerFormat: '',
                pointFormat: '<span style="color:{point.color};font-size:11px;"><b>{point.y:.0f}%</b></span>'
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
            data: seriesData,
            marker:{
                symbol:'diamond'
            },
            tooltip: {
                //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                headerFormat: '',
                pointFormat: '<span style="color:{point.color};font-size:11px;"><b>{point.y:.0f}</b></span>'
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
        width: '336px',
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
       <>
        <div className="card-header fw-700 fs-14 ps-10px pb-0 pt-5px mb-0 h-40px lh-normal border-0 bg-white text-blue">Net Profit<GraphHeading data={data} finData={finData} /> & <br/>Net Profit Margin<span className="fst-italic fw-500 fs-12 ms-1">(%)</span></div>
        <div className="card-body p-0 overflow-hidden">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                containerProps={{ style: containerStyle }}  // Apply the style here
                />
        </div>
      </>  
    )
}

export default NetProfitGraph;