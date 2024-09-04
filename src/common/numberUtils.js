import {format} from 'date-fns';

// Helper function to format numbers
export function formatNumber(num) {
    if (num === undefined || num === null) return "";
    const number = parseFloat(num);
    if (isNaN(number)) return "";
    
    const formattedNum = Math.abs(number).toFixed(2);  // Use absolute value to remove the negative sign
    return number < 0 ? `(${formattedNum})` : formattedNum;
  }

export function formatFrontNumber(num) {
    if (num === undefined || num === null) return "";
    const number = parseFloat(num);
    if (isNaN(number)) return "";
    
    const formattedNum = number.toFixed(2);  // Use absolute value to remove the negative sign
    return formattedNum;
  }  

  export function formatForecastNumber(num) {
    if (num === undefined || num === null) return "";
    const number = parseFloat(num);
    if (isNaN(number)) return "";
    
    const formattedNum = number.toFixed(1);  // Use absolute value to remove the negative sign
    return formattedNum;
  }    

export const getMonthName = (monthNumber) => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    // monthNumber is expected to be in the range 1-12
    return monthNames[monthNumber - 1];
};

export function formatDate(date, dateFormat = 'dd-MMM-yyyy') {
  return format(new Date(date), dateFormat);
}