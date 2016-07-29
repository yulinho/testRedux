import { connect } from 'react-redux'
import { apiFetchChangeDesk ,setVisibilityFilter,closeSmartChangeDesk ,openDesk ,apiOpenDesk,smartchangedesk_close,apiChangeDesk ,smartchangedesk_clickdesk } from '../actions'
import DumbChangeDesk from '../components/DumbChangeDesk'

const mapStateToProps = (state, ownProps) => {
  return {
    visable: state.smartChangeDesk.visable,
    size: state.smartChangeDesk.size,
    title: state.smartChangeDesk.title + " - 转台",
    desk: state.smartChangeDesk.desk,
    disabled: state.smartChangeDesk.disabled,
    buttonTitle: state.smartChangeDesk.buttonTitle ,
    menu: state.smartChangeDesk.menu,
    desks: state.desks,
    bill: state.smartDeskDetail.bill,
    source_desk: state.smartDeskDetail.desk,
    dest_desk: state.smartChangeDesk.dest_desk
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
    onClickClose: (menu) =>{
      dispatch(smartchangedesk_close(menu))
    },
    onClickOpenDesk: ( desk_id )=>{
      // alert("onClickOpenDesk")
      dispatch(apiOpenDesk(desk_id))
    },
    onClickChangeDesk: (menu) =>{
      dispatch(apiChangeDesk(menu))
    },
    onClickDesk: (desk) =>{
      dispatch(smartchangedesk_clickdesk(desk))
      // dispatch(apiChangeDesk(menu))
    },
    onClickChangeDesk: ()=>{
      dispatch(apiFetchChangeDesk())
    },
  }
}

const SmartChangeDesk = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbChangeDesk)

export default SmartChangeDesk