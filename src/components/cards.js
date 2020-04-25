import * as React from "react";
import PropTypes from "prop-types";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  render() {
    const { item } = this.state;
    if (!item.length > 0) {
        return '';
    }
      return (
        <div className="row">
          <div className="column card-col">
            <div className="card card-column">
              <div className="card-body">
                <h5 className="card-title card-col-title">{`Symbol Details`}</h5>
                <p className="card-text">{`Symbol ID : ${item[0].symbol_id}`}</p>
                <p className="card-text">{`Exchange ID : ${item[0].exchange_id}`}</p>
                <p className="card-text">{`Symbol Type : ${item[0].symbol_type}`}</p>
                <p className="card-text">{`Asset Base : ${item[0].asset_id_base}`}</p>
                <p className="card-text">{`Asset Quote : ${item[0].asset_id_quote}`}</p>
              </div>
            </div>
          </div>
          <div className="column card-col">
            <div className="card card-column">
              <div className="card-body">
                <h5 className="card-title card-col-title">{`Volume Details`}</h5>
                <p className="card-text">{`Trade Start : ${item[0].data_trade_start}`}</p>
                <p className="card-text">{`Trade End : ${item[0].data_trade_end}`}</p>
                <p className="card-text">{`1 month Volume : ${item[0].volume_1mth}`}</p>
                <p className="card-text">{`1 month Volume USD : ${item[0].volume_1mth_usd}`}</p>
              </div>
            </div>
          </div>
          <div className="column card-col">
            <div className="card card-column">
              <div className="card-body">
                <h5 className="card-title card-col-title">{`Data Details`}</h5>
                <p className="card-text">{`Data Start : ${item[0].data_start}`}</p>
                <p className="card-text">{`Data End : ${item[0].data_end}`}</p>
                <p className="card-text">{`Quote Start : ${item[0].data_quote_start}`}</p>
                <p className="card-text">{`Quote End : ${item[0].data_quote_end}`}</p>
                <p className="card-text">{`OrderBook Start : ${item[0].data_orderbook_start}`}</p>
                <p className="card-text">{`OrderBook End : ${item[0].data_orderbook_end}`}</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

Cards.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};
