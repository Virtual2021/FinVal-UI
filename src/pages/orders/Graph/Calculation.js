export function CalculateGraphData(salesNumber, percentage) {
    let number = 0;
    number = salesNumber * (1 + percentage / 100);
    return number;  
}

export function calculateNetProfitMargin(salesNumber, netProfit) {
  let number = 0;
  number = ( parseFloat(salesNumber) / parseFloat(netProfit) ) * 100;
  return number;
}