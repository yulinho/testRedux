
const onOff = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      // return Object.assign({}, state, {
      //   onOff: false//!state.onOff
      // })
      return false
    case 'OPEN_MODAL':
      // return Object.assign({}, state, {
      //   onOff: false//!state.onOff
      // })
      return true
    default:
      return state
  }
}

export default onOff