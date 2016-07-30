import { connect } from 'react-redux'
import { smarttakemyorder_settingcount_plus,setVisibilityFilter,closeSmartTakeMyOrder ,openDesk ,apiOpenDesk,smarttakemyorder_close,apiTakeMyOrder } from '../actions'
import DumbTakeMyOrder from '../components/DumbTakeMyOrder'

const mapStateToProps = (state, ownProps) => {
  return {
    visable: state.smartTakeMyOrder.visable,
    size: state.smartTakeMyOrder.size,
    title: state.smartTakeMyOrder.title + " - 点菜",
    desk: state.smartTakeMyOrder.desk,
    disabled: state.smartTakeMyOrder.disabled,
    buttonTitle: state.smartTakeMyOrder.buttonTitle ,
    menu: state.smartTakeMyOrder.menu,
    count: state.smartTakeMyOrder.count,
    bill: state.smartDeskDetail.desk ? state.bills.filter((bill)=> {return bill.id ==  state.smartDeskDetail.desk.bill_id} )[0] : null, 
    //state.smartDeskDetail.desk.bill_id
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
    onSmarttakemyorder_settingcount_plus: (value) =>{
      dispatch(smarttakemyorder_settingcount_plus(value))
    }
  }
}

const SmartTakeMyOrder = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbTakeMyOrder)

export default SmartTakeMyOrder