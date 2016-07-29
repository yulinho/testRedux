import { connect } from 'react-redux'
import { setVisibilityFilter,toggleModal } from '../actions'
import DumbDialog from '../components/DumbDialog'

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  // console.log(ownProps)
  return {
    onOff: state.onOff
    // ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // dispatch(setVisibilityFilter(ownProps.filter))
      // console.log(ownProps)
      dispatch(toggleModal(ownProps.onOff))
      // alert("onclick")
    }
  }
}

const SmartDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbDialog)

export default SmartDialog