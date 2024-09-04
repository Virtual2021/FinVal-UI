const GraphHeading = ({data, finData}) => {
  return (
    <span className="fst-italic fw-500 fs-12 ms-1">({data.currency} {finData.valueType[0]})</span>
  )
}

export default GraphHeading;