import uuid from 'uuid';

export default function quotes(state = [], action){
  let idx;
  switch (action.type){
    case "ADD_QUOTE":
      console.log("adding", action.quote)
      console.log(state)
      return [...state, {...action.quote, id: uuid()}]

    case "REMOVE_QUOTE":
      console.log(state)
      idx = state.findIndex(quote => quote.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    }
  return state;
}
