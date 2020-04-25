import * as React from "react";
import "./styles.scss";
import api from "./api/api";
import CardList from "./components/cardList";

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }
  get initialState() {
    return {
        symbolList: {}
    };
  }
  handleClick = (e) => {
    const selectedSymbol = e.target.id;
    let symbolDetails = localStorage.getItem(`${selectedSymbol}`);
    if(!symbolDetails){
        api.fetchSymbolDetails(selectedSymbol).then(data => {
            localStorage.setItem(`${selectedSymbol}`,JSON.stringify(data));
        });
    }
    this.props.history.push({
        pathname: '/details',
        state: { selectedSymbol: selectedSymbol }
    });
  }
  componentWillMount() {
    let symbolList = localStorage.getItem('symbolList');
    if(!symbolList){
        api.fetchSymbols().then(data => {
            localStorage.setItem('symbolList',JSON.stringify(data));
        });
    }
    this.setState({symbolList:JSON.parse(symbolList)});
  }
  render() {
    return (
      <div className="wrapper">
            <CardList 
            items={this.state.symbolList}
            onChange={this.handleClick}/>
      </div>
    );
  }
}
