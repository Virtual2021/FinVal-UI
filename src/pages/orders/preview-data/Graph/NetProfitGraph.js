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
    
          // Function to format numbers with thousand separators and two decimal places
    const formatNumber = (number) => {
        return number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

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
            },
            
            gridLineWidth: 1, // Add grid lines
            gridLineColor: '#e0e0e0', // Set grid line color
            gridLineDashStyle: 'ShortDash' // Set grid line style
        }],
        yAxis: [{ // Primary yAxis for waveData (Net Profit Margin)
            title: {
                text: ''
            },
            labels: {
                format: '{value}%',
                enabled: false
            },
            visible: false,
            min: Math.min(0, Math.min(...updatedNetProfitMarginPercent)), // Adjust min to handle negative values
            gridLineWidth: 1, // Optionally add grid lines here
            gridLineColor: '#e0e0e0', // Optionally set grid line color here
            gridLineDashStyle: 'ShortDash' // Optionally set grid line style here
        }, { // Secondary yAxis for seriesData (Net Profit)
            title: {
                text: ''
            },
            labels: {
                format: '{value}',
                enabled: false
            },
            visible: false,
            min: Math.min(0, Math.min(...updatedNetProfit)), // Adjust min dynamically based on negative values
            max: Math.max(...updatedNetProfit),
            gridLineWidth: 1, // Optionally add grid lines here
            gridLineColor: '#e0e0e0', // Optionally set grid line color here
            gridLineDashStyle: 'ShortDash' // Optionally set grid line style here
        }],
        tooltip: {
            shared: false
        },
        plotOptions: {
            column: {
                borderWidth: 0,
                borderRadius: 0
            }
        },
        series: [{
            name: 'Net Profit Margin',
            type: 'column',
            yAxis: 0, // Associate with primary yAxis (waveData)
            data: waveData,
            color:'#183ea3',
            tooltip: {
                headerFormat: '',
                pointFormat: '<span style="color:{point.color};font-size:11px;"><b>{point.y:.0f}%</b></span>',
            },
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '<span style="font-size:9px;">{point.y:.1f}</span>'
            }
        }, {
            name: 'Net Profit',
            type: 'spline',
            yAxis: 1, // Associate with secondary yAxis (seriesData)
            data: seriesData,
            marker:{
                symbol: 'diamond'
            },
            tooltip: {
                headerFormat: '',
                pointFormatter: function() {
                    return `<span style="color:${this.color};font-size:11px;"><b>${formatNumber(this.y)}</b></span>`;
                }
            },
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return `<span style="font-size:9px;"><b>${formatNumber(this.y)}</b></span>`;
                }
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