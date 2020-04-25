import * as React from "react";
import "./styles.scss";
import TableView from "./components/table";
import Cards from "./components/cards";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  get initialState() {
    return {
      symbolDetail: {},
      symbolList: {},
    };
  }
  componentWillMount() {
    const propsState = this.props.location.state;
    if (propsState && propsState.selectedSymbol) {
      let symbolDetails = localStorage.getItem(`${propsState.selectedSymbol}`
      );
      let symbolList = JSON.parse(localStorage.getItem("symbolList"));
      symbolList = symbolList.filter(
        (item) => item.symbol_id === propsState.selectedSymbol
      );
      this.setState({
        symbolDetail: JSON.parse(symbolDetails),
        symbolList: symbolList,
      });
    }
  }
  render() {
    return <div className="wrapper">
        <Cards
        item={this.state.symbolList}
        />
        <TableView
        items={this.state.symbolDetail}
        />
    </div>
  }
}
