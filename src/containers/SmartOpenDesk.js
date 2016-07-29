import { connect } from 'react-redux'
import { smartopendesk_settingholdpeople_plus ,setVisibilityFilter,closeSmartOpenDesk ,openDesk ,apiOpenDesk ,smartopendesk_settingholdpeople } from '../actions'
import DumbOpenDesk from '../components/DumbOpenDesk'

const mapStateToProps = (state, ownProps) => {
  return {
    visable: state.smartOpenDesk.visable,
    size: state.smartOpenDesk.size,
    title: state.smartOpenDesk.title + " - 开台",
    desk: state.smartOpenDesk.desk,
    disabled: state.smartOpenDesk.disabled,
    buttonTitle: state.smartOpenDesk.buttonTitle,
    holdpeople: state.smartOpenDesk.holdpeople
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
    onClickClose: () =>{
      dispatch(closeSmartOpenDesk(true))
    },
    onClickOpenDesk: ( desk_id )=>{
      // alert("onClickOpenDesk")
      dispatch(apiOpenDesk(desk_id))
    },
    onSmartopendesk_settingholdpeople: (value) => {
      dispatch(smartopendesk_settingholdpeople(value))
    },
    onSmartopendesk_settingholdpeople_plus: (value) => {
      dispatch(smartopendesk_settingholdpeople_plus(value))
    }
  }
}

const SmartOpenDesk = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbOpenDesk)

export default SmartOpenDesk