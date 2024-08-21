import Cash from "./Cash";
import Cogs from "./Cogs";
import CompanyData from "./CompanyData";
import Ebidta from "./Ebidta";
import NetProfit from "./NetProfit";
import SalesChart from "./Sales";

const GraphElements = ({data}) => {
  
    return (
        <>
          <CompanyData data={data}/>
          <div className="row">
            <SalesChart />
            <Cogs />
          </div>
          <div class="row">
             <Ebidta />
             <NetProfit />
             <Cash />
        </div>
        </>
    )

}

export default GraphElements;