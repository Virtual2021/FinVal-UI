import { formatDate } from "../../common/dateUtils";

const PlanHistory = ({data}) => {
    function ucfirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
      
  return (
    <table className="table table-striped table-bordered fs-14 lh-normal mytable border-light-blue align-middle text-center">
        <thead className="border-solid border-1 border-light-blue">
            <tr>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Order Date</th>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Plan Type</th>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Plan ID</th>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Order Type</th>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-50px">#Reports<br/>Added</th>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-50px">Access<br/>Days</th>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-50px">#Reports<br/>Utilized</th>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Plan Expiry Date</th>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-100px">Status</th>
                <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index )=>(
            <tr key={index}>
                <td className="fs-14">{formatDate(item.createdAt)}</td>
                <td className="fs-14">{item.planId && item.planId.name}</td>
                <td className="fs-14">{item.planSeqId}</td>
                <td className="fs-14">{item.orderType === "new" ? "New Order" : "Upgrade Order"}</td>
                <td className="fs-14">{item.balanceQuota}</td>
                <td className="fs-14">{item.planId.accessDays}</td>
                <td className="fs-14">{item.orders.length}</td>
                <td className="fs-14">{item.expiresAt ? formatDate(item.expiresAt) : 'NA'}</td>
                <td className="fs-14">{item.planStatusType ? ucfirst(item.planStatusType) : "NA"}</td>
                <td className="fs-14">
                    { !item.planStatusType === 'expired' &&
                        <a href="#" className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-file-earmark-pdf"></i> Invoice</a>
                    }
                </td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default PlanHistory;