import {formatNumber} from "../../../common/numberUtils";

const Financial = ({data}) => {
  const finance = data?.calculations?.finance || [];
    return (
    <div className="col-sm-6">
        <fieldset className="bg-white p-15px mt-0 mt-sm-30px h-100 position-relative">
            <legend className="fw-600 float-none border-1px col-auto fs-18 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-blue text-golden">Current Financial Information</legend>
            <span className="text-light-gray fw-400 fs-13 fst-italic position-absolute top-0 end-0 pe-15px">All financial numbers specified in ({finance.valueType})</span>
            <p className="mb-15px mt-30px fs-16 fw-500 lh-normal text-center">Historical Numbers for the Year <span className="fst-italic fw-700">{finance.dataYear}</span></p>

            <div className="d-flex justify-content-center sm-justify-content-start">
                <table className="fs-16 fw-400 lh-normal text-end">
                <tbody>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Sales</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.sales)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Cost of Sales</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.costOfSales)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">EBITDA</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.ebitda)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Depreciation</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.depreciation)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Interest Expense</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.interestExpense)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Cash Balance</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.cashBalance)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Net Profit</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.netProfit)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Debt / Loan</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.debtLoan)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Equity</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.equity)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Receivables</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.receivables)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Inventories</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.inventories)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Payables</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.payables)}</td>
                    </tr>
                    <tr className="table-row">
                        <td className="label-cell p-5px">Net Fixed Assets</td>
                        <td className="colon-cell p-5px">:</td>
                        <td className="data-cell fw-600 p-5px">{formatNumber(finance.netFixedAssets)}</td>
                    </tr>
                </tbody>

                </table>
            </div>
        </fieldset>
    </div>
  )
}

export default Financial;