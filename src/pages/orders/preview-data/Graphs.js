import Cogs from "../Graph/Cogs";
import EbitdaGraph from "./Graph/EbitdaGraph";
import SalesChart from "../Graph/Sales";
import NetProfitGraph from "./Graph/NetProfitGraph";
import CashGraph from "./Graph/CashGraph";
import Country from "./Graph/Country";

const Graph = ({data}) => {
  return (
    <div className="col-sm-12">
        <div className="row">
            <div className="col-sm-4">
                <div className="card mt-30px rounded-bottom-0 border-0 box-shadow">
                    <SalesChart data={data.order.business.business} finData={data.graphData.finData} forecastData={data.graphData.forecastData}/>
                </div>
            </div>

            <div className="col-sm-4">
                <div className="card mt-30px rounded-bottom-0 border-0 box-shadow">
                    <Cogs data={data.order.business.business} finData={data.graphData.finData} forecastData={data.graphData.forecastData}/> 
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card mt-30px rounded-bottom-0 border-0 box-shadow">
                   <EbitdaGraph data={data.order.business.business} finData={data.graphData.finData} forecastData={data.graphData.forecastData}/> 
                </div>
            </div>
        </div>    
        <div className="row">
            <div className="col-sm-4">
                <div className="card mt-30px rounded-bottom-0 border-0 box-shadow">
                   <NetProfitGraph data={data.order.business.business} finData={data.graphData.finData} forecastData={data.graphData.forecastData}/> 
                </div>
            </div>

        <div className="col-sm-4">
            <div className="card mt-30px rounded-bottom-0 border-0 box-shadow">
               <CashGraph data={data.order.business.business} finData={data.graphData.finData}  />
            </div>
        </div>

            <Country data={data.order.business.business}/>
        </div>
        </div>
  )
}

export default Graph;