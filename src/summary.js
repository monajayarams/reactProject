import * as React from "react";
import "./styles.scss";
import api from "./api/api";
import CardList from "./components/cardList";

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbolList : []
    };
  }
  handleClick = (e) => {
    const selectedSymbol = e.target.id;
    this.props.history.push({
        pathname: '/details',
        state: { selectedSymbol: selectedSymbol }
    });
  }
  componentDidMount() {
    let symbolList = JSON.parse(localStorage.getItem('symbolList'));
    if(!symbolList){
        api.fetchSymbols().then(data => {
            let res = JSON.stringify(data);
            localStorage.setItem('symbolList',res);
            this.setState({symbolList:JSON.parse(res)});
        });
    }else{
      this.setState({symbolList:symbolList});
    }
  }
  render() {
    const {symbolList} = this.state;
    return (
      <div className="wrapper">
            <CardList 
            items={symbolList}
            onChange={this.handleClick}/>
      </div>
    );
  }
}
