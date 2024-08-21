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