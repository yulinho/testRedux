const bills = (state = [], action) => {
  // console.log(action.response.json())
  // console.log(state)
  // console.log(action)
  switch (action.type) {
    case 'FETCH_BILLS':
      // let obj = desk(undefined, action);
      // console.log(obj)
       // console.log("FETCH_bills")
      // console.log(action.json)
      return action.json
      // return [
      //   ...state,
      //   action.json
      //   // action.message
      //    // obj
      // ]
    case 'bills_ONCLICKDESK':
      // console.log(action.type)
      // console.log(action.desk)
      // let obj = desk(undefined, action);
      // console.log(obj)
       // console.log("FETCH_bills")
      // console.log(action.json)
      // console.log(state)
      return state
      // return [
      //   ...state,
      //   action.json
      //   // action.message
      //    // obj
      // ]

    default:
      return state
  }
}

export default bills