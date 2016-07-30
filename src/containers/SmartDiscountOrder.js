import { connect } from 'react-redux'
import { smartdiscountorder_setdiscount ,smartdiscountorder_api_dosome ,smartdiscountorder_close , setVisibilityFilter,closeSmartDiscountOrder ,openDesk ,apiOpenDesk,smarttakemyorder_close,apiDiscountOrder } from '../actions/DiscountOrder'
import DumbDiscountOrder from '../components/DumbDiscountOrder'

const mapStateToProps = (state, ownProps) => {
  return {
    visable: state.smartDiscountOrder.visable,
    size: state.smartDiscountOrder.size,
    title: state.smartDiscountOrder.title + " - 单项打折",
    desk: state.smartDiscountOrder.desk,
    disabled: state.smartDiscountOrder.disabled,
    buttonTitle: state.smartDiscountOrder.buttonTitle ,
    menu: state.smartDiscountOrder.menu ,
    order:  state.smartDiscountOrder.order,
    discount: state.smartDiscountOrder.discount
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
    onSmartdiscountorder_dosome: (value , discount) => {
      dispatch(smartdiscountorder_api_dosome(value , discount))
    },
    onSmartdiscountorder_setdiscount: (discount) =>{
      dispatch(smartdiscountorder_setdiscount(discount))
    }
  }
}

const SmartDiscountOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbDiscountOrder)

export default SmartDiscountOrder