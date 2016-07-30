import { connect } from 'react-redux'
import { apiFetchSetorderdiscount, apiFetchCancelorder , apiFetchCancelbill ,smartchangedesk_open ,closeSmartDeskDetail ,apiFetchCheckout ,apiFetchChangeDesk ,smartdeskdetail_catepagechange,smartdeskdetail_menupagechange,smartdeskdetail_filterchange,smartdeskdetail_cateidchange,smartdeskdetail_menupagereset ,smarttakemyorder_open} from '../actions'
import {smartdiscountorder_open} from '../actions/DiscountOrder'
import DumbDeskDetail from '../components/DumbDeskDetail'

const mapStateToProps = (state, ownProps) => {
  // console.log(state.smartDeskDetail.bill)
  return {
    visable: state.smartDeskDetail.visable,
    size: state.smartDeskDetail.size,
    desk: state.smartDeskDetail.desk,
    bill: state.smartDeskDetail.desk ? state.bills.filter((bill)=> {return bill.id ==  state.smartDeskDetail.desk.bill_id} )[0] : null,//smartDeskDetail.bill,
    orders: state.smartDeskDetail.bill ? state.orders.filter((order)=> {return order.bill_id ==  state.smartDeskDetail.bill.id} ) : [],
    disabled: state.smartDeskDetail.disabled,
    buttonTitle: state.smartDeskDetail.buttonTitle,
    buttonTitle2: state.smartDeskDetail.buttonTitle2,
    buttonTitle3: state.smartDeskDetail.buttonTitle3,
    buttonTitle4: state.smartDeskDetail.buttonTitle4,
    title: state.smartDeskDetail.title + " - 详情",
    cates: state.cates,
    menus: state.menus,
    cate_index: state.smartDeskDetail.cate_index,
    menu_index: state.smartDeskDetail.menu_index
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
    onClickClose: () =>{
      dispatch(closeSmartDeskDetail(true))
    },
    onClickCheckout: () =>{
      dispatch(apiFetchCheckout(true))
    },
    onSmartdeskdetail_catepagechange: (plus,pagecount) =>{
      dispatch(smartdeskdetail_catepagechange(plus,pagecount))
    },
    onSmartdeskdetail_menupagechange: (plus,pagecount) =>{
      dispatch(smartdeskdetail_menupagechange(plus,pagecount))
    },
    onSmartdeskdetail_filterchange: (value) =>{
      dispatch(smartdeskdetail_filterchange(value))
    },
    onSmartdeskdetail_cateidchange: (value) =>{
      dispatch(smartdeskdetail_menupagereset(value))
      dispatch(smartdeskdetail_cateidchange(value))
    },
    onSmartTakeMyOrder: (menu) =>{
      dispatch(smarttakemyorder_open(menu))
    },
    onClickButton2: (desk) =>{ //转台 //sourcedesk_id,destdesk_id
      // dispatch(apiFetchChangeDesk(sourcedesk_id ,destdesk_id))
      dispatch(smartchangedesk_open(desk))
    },
    onClickButton3: () =>{ //拼单 
      console.log("拼单")
      // dispatch(apiFetchCheckout(true))
    },
    onClickButton4: () =>{ //撤单
      // dispatch(apiFetchCheckout(true))
      dispatch(apiFetchCancelbill())
    },
    onClickCancelOrder: (order) =>{//撤菜
      dispatch(apiFetchCancelorder(order))
      // console.log(order)
    },
    onSetorderdiscount: (order) =>{//打折
      dispatch(smartdiscountorder_open(order))

      // dispatch(apiFetchSetorderdiscount(order))
      // console.log(order)
    }


  }
}

const SmartDeskDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbDeskDetail)

export default SmartDeskDetail