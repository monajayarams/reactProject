import * as React from "react";
import "./styles.scss";
import api from "./api/api";
import TableView from "./components/table";
import Cards from "./components/cards";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbolDetail: [],
      symbolList: [],
    };
  }
  componentDidMount() {
    const propsState = this.props.location.state;
    if (propsState && propsState.selectedSymbol) {
      const selectedSymbol = propsState.selectedSymbol;
      //get the symbol list and details from localstorage
      let symbolList = JSON.parse(localStorage.getItem("symbolList"));
      let symbolDetail = JSON.parse(localStorage.getItem(selectedSymbol));

      symbolList = symbolList.filter(
        (item) => item.symbol_id === propsState.selectedSymbol
      );
      //if details not available in localstorage call fetch api
      if (!symbolDetail) {
        api.fetchSymbolDetails(selectedSymbol).then((data) => {
          let res = JSON.stringify(data);
          localStorage.setItem(`${selectedSymbol}`, res);
          this.setState({
            symbolDetail: JSON.parse(res),
            symbolList: symbolList,
          });
        });
      } else {
        this.setState({
          symbolDetail: symbolDetail,
          symbolList: symbolList,
        });
      }
    }
  }
  render() {
    const { symbolDetail, symbolList } = this.state;
    if (
      (symbolDetail && !symbolDetail.length > 0) ||
      (symbolList && !symbolList.length > 0)
    ) {
      return (
        <div className="wrapper">
          <div className="loading">
            <div className="loader"></div>
          </div>
        </div>
      );
    }
    return (
      <div className="wrapper">
        <div className="row prev">
          <div className="previous round" onClick={() => this.props.history.goBack()}><span>&#xab;</span></div>
        </div>
        <Cards item={symbolList} />
        <TableView items={symbolDetail} />
      </div>
    );
  }
}
