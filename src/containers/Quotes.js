import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  renderQuoteCards = () => {
    console.log(this.props)
    if (this.props.quotes){
      return this.props.quotes.map(quote => <QuoteCard key={quote.id} {...quote}/>)
    }
  
  }
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuoteCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const msp = (state) => {
  return {quotes: state.quotes}
}
//add arguments to connect as needed
export default connect(msp)(Quotes);
