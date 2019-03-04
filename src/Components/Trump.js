import React, { Component } from 'react';
import Axios from 'axios';
class Trump extends Component {
  constructor(props){
    super(props);
    this.state={
      quote:null
    }
    this.getNewQuote=this.getNewQuote.bind(this);
  }

  getNewQuote(){
    Axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    .then((response)=>this.setState({quote:response.data}))
  }



  componentDidMount() {
    this.getNewQuote();
  }
  render() {
    return(
      <div>
<h1> Famous Trump quotes</h1>
<p> {this.state.quote!==null && this.state.quote.message} </p>
<div className="wrapper">
<button className="button" onClick={this.getNewQuote}>Get new Quote!</button>
      </div>
      </div>
    );
  }
}
export default Trump;
