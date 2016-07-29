import _ from "lodash";
const initialState ={
  all: [],
  filtered: [],
  chunked: [],
  filter: "",
  cate_id: null,
}
const getFiltered = (state ,action ,all, filter ,cate_id) => {
  return all.filter((menu)=>{
        // console.log(menu)
        return cate_id == null ?  (menu.name.indexOf(filter) > -1) : (menu.name.indexOf(filter) > -1 && menu.cate_id == cate_id);
        // return menu.name.indexOf(filter) > -1;
        // return true
      });
}
const menus = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MENUS':
      // console.log(action.json)
      // let menus = action.json;
      let all = action.json;
      let filtered = getFiltered(state, action ,all,state.filter);
      return Object.assign({}, state, {
      all: all,
      filter: state.filter,
      filtered: filtered,
      chunked: _.chunk(filtered, 20)
      })
    case 'MENUS_FILTER_MENUS':
      // console.log(action.json)
      // let menus = action.json;
      let filtered2 = getFiltered(state, action , state.all, action.value, state.cate_id);
      return Object.assign({}, state, {
      filter: action.value,
      filtered: filtered2,
      chunked: _.chunk(filtered2, 20)
      })
      // console.log(action)
      return state
    case 'MENUS_CATEID_MENUS':
      // console.log(action.json)
      // let menus = action.json;
      let filtered3 = getFiltered(state, action , state.all, state.filter ,action.value);
      return Object.assign({}, state, {
      cate_id:  action.value,
      filtered: filtered3,
      chunked: _.chunk(filtered3, 20)
      })
      // console.log(action)
      return state

    default:
      return state
  }
}

export default menus

