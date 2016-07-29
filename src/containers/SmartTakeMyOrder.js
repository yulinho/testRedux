import { connect } from 'react-redux'
import { setVisibilityFilter,closeSmartTakeMyOrder ,openDesk ,apiOpenDesk,smarttakemyorder_close,apiTakeMyOrder } from '../actions'
import DumbTakeMyOrder from '../components/DumbTakeMyOrder'

const mapStateToProps = (state, ownProps) => {
  return {
    visable: state.smartTakeMyOrder.visable,
    size: state.smartTakeMyOrder.size,
    title: state.smartTakeMyOrder.title + " - 点菜",
    desk: state.smartTakeMyOrder.desk,
    disabled: state.smartTakeMyOrder.disabled,
    buttonTitle: state.smartTakeMyOrder.buttonTitle ,
    menu: state.smartTakeMyOrder.menu
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
    onClickClose: (menu) =>{
      dispatch(smarttakemyorder_close(menu))
    },
    onClickOpenDesk: ( desk_id )=>{
      // alert("onClickOpenDesk")
      dispatch(apiOpenDesk(desk_id))
    },
    onClickTakeMyOrder: (menu) =>{
      dispatch(apiTakeMyOrder(menu))
    },
  }
}

const SmartTakeMyOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbTakeMyOrder)

export default SmartTakeMyOrder