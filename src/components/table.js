import React from "react";
import PropTypes from "prop-types";

const TableView = ({
  items
}) => (
<div className="table-wrapper">
<h2 className="tableTitle"> Transaction Details</h2>
  <div className="rTable">
    <div className="rTableHeading">
    <div className="rTableHead">TIME EXCHANGE</div>
    <div className="rTableHead">TIME COIN API</div>
    <div className="rTableHead">UUID</div>
    <div className="rTableHead">PRICE</div>
    <div className="rTableHead">SIZE</div>
    <div className="rTableHead">TAKER SIDE</div>
    </div>
    {items.map((item) => (
        <div className="rTableRow" key={item.uuid}>
            <div className="rTableCell">{item.time_exchange}</div>
            <div className="rTableCell">{item.time_coinapi}</div>
            <div className="rTableCell">{item.uuid}</div>
            <div className="rTableCell">{item.price}</div>
            <div className="rTableCell">{item.size}</div>
            <div className="rTableCell">{item.taker_side}</div>
        </div>
    ))}
  </div>
  </div>
);

TableView.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default TableView;
