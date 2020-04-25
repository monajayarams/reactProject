import React from "react";
import PropTypes from "prop-types";

const CardList = ({
  items,
  onChange
}) => (
  <div className="row">
    {items.map((item) => (
        <div className="column" key={item.symbol_id}>
            <div className="card" id={item.symbol_id} onClick={onChange}>
                <img className={`card-img-top ${item.symbol_id}`} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{`${item.asset_id_base} - ${item.asset_id_quote}`}</h5>
                    <p className="card-text">{`Exchange ID : ${item.exchange_id}`}</p>
                </div>
            </div>
       </div>
    ))}
  </div>
);

CardList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CardList;
