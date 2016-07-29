import { connect } from 'react-redux'
import { setVisibilityFilter,toggleModal ,onClickDialog } from '../actions'
import MyDialog from '../components/MyDialog'

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  // console.log(ownProps)
  return {
    visable: state.dialog.visable,
    title: state.dialog.title,
    content: state.dialog.content,
    dialogClassName:state.dialog.dialogClassName,
    data:state.dialog.data
    // ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // dispatch(setVisibilityFilter(ownProps.filter))
      // console.log(ownProps)
      // dispatch(toggleModal(ownProps.visable))
      dispatch(onClickDialog(ownProps.visable))
      // alert("onclick")
    }
  }
}

const Dialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDialog)

export default Dialog