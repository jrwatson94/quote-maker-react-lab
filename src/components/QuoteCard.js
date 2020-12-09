import React from 'react';
import {connect} from 'react-redux'
import {removeQuote} from '../actions/quotes'


const QuoteCard = (props) =>

  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {props.content}
          <footer>- author <cite title="Source Title">{props.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
          >
            <span onClick={()=>{
              console.log(props)
              props.removeQuote(props.id)}} aria-hidden="false">&times;</span>
          </button>
        </div>
        <div>Votes: </div>
      </div>
    </div>
  </div>;

  
const mdp = (dispatch) => {
  return {
    removeQuote: (id) => {dispatch(removeQuote(id))}
  }
}


export default connect(null,mdp)(QuoteCard);
