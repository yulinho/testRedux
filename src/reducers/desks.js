// async function getData(){

// }
const desk = (state, action) => {
  switch (action.type) {
    case 'FETCH_DESKS':
      // return {
      //   id: action.id,
      //   text: action.text,
      //   completed: false
      // }

      // let url = "http://localhost/index.php?r=idc/default/desks";

      // fetch(url).then(function(res) {
      //         // console.log(res)

      //     if (res.ok) {
      //         res.json().then(function(obj) {
      //             // Get the JSON
      //         // console.log(obj)
      //         return obj
      //         })
      //     }
      // }, function(ex) {
      //     console.log(ex)
      // })

      // let res = await fetch(url);

    // case 'TOGGLE_TODO':
    //   if (state.id !== action.id) {
    //     return state
    //   }

    //   return Object.assign({}, state, {
    //     completed: !state.completed
    //   })

    default:
      return state
  }
}

const desks = (state = [], action) => {
  // console.log(action.response.json())
  // console.log(state)
  switch (action.type) {
    case 'FETCH_DESKS':
      // let obj = desk(undefined, action);
      // console.log(obj)
       // console.log("FETCH_DESKS")
      // console.log(action.json)
      return action.json
      // return [
      //   ...state,
      //   action.json
      //   // action.message
      //    // obj
      // ]
    case 'DESKS_ONCLICKDESK':
      // console.log(action.type)
      // console.log(action.desk)
      // let obj = desk(undefined, action);
      // console.log(obj)
       // console.log("FETCH_DESKS")
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

export default desks