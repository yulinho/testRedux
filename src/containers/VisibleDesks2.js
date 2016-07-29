import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import dumbOpenDesk from '../components/dumbOpenDesk'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const VisableDesks2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(dumbOpenDesk)

export default VisableDesks2