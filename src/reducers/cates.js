import _ from "lodash";
const initialState ={
  all: [],
  chunked: []
}
const cates = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CATES':
    	// console.log(action.json)
      // let cates = action.json;
      return Object.assign({}, state, {
		  all: action.json,
		  chunked: _.chunk(action.json, 10)
      })
    default:
      return state
  }
}

export default cates

