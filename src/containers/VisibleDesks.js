import { connect } from 'react-redux'
import { onClickDesk } from '../actions'
import Desks from '../components/Desks'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    desks: state.desks,
    bills: state.bills,
    orders:state.orders//getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onClickDesk: (desk,bill,orders) => {
      // console.log("deskclick")
      // console.log(bill)
      dispatch(onClickDesk(desk,bill,orders))
    }
  }
}

const VisibleDesks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Desks)

export default VisibleDesks