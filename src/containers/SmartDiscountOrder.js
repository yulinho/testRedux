import { connect } from 'react-redux'
import { smartdiscountorder_dosome ,smartdiscountorder_close , setVisibilityFilter,closeSmartDiscountOrder ,openDesk ,apiOpenDesk,smarttakemyorder_close,apiDiscountOrder } from '../actions/DiscountOrder'
import DumbDiscountOrder from '../components/DumbDiscountOrder'

const mapStateToProps = (state, ownProps) => {
  return {
    visable: state.smartDiscountOrder.visable,
    size: state.smartDiscountOrder.size,
    title: state.smartDiscountOrder.title + " - SmartDiscountOrder",
    desk: state.smartDiscountOrder.desk,
    disabled: state.smartDiscountOrder.disabled,
    buttonTitle: state.smartDiscountOrder.buttonTitle ,
    menu: state.smartDiscountOrder.menu
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
    onClickClose: (menu) =>{
      dispatch(smartdiscountorder_close(menu))
    },
    onClickOpenDesk: ( desk_id )=>{
      // alert("onClickOpenDesk")
      dispatch(apiOpenDesk(desk_id))
    },
    onClickDiscountOrder: (menu) =>{
      dispatch(apiDiscountOrder(menu))
    },
    onSmartdiscountorder_dosome: (value) => {
      dispatch(smartdiscountorder_dosome(value))
    },
  }
}

const SmartDiscountOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbDiscountOrder)

export default SmartDiscountOrder