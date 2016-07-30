import { connect } from 'react-redux'
import { smartcombinebill_dosome ,smartcombinebill_close , setVisibilityFilter,closeSmartCombineBill ,openDesk ,apiOpenDesk,smarttakemyorder_close,apiCombineBill } from '../actions/CombineBill'
import DumbCombineBill from '../components/DumbCombineBill'

const mapStateToProps = (state, ownProps) => {
  return {
    visable: state.smartCombineBill.visable,
    size: state.smartCombineBill.size,
    title: state.smartCombineBill.title + " - SmartCombineBill",
    desk: state.smartCombineBill.desk,
    disabled: state.smartCombineBill.disabled,
    buttonTitle: state.smartCombineBill.buttonTitle ,
    menu: state.smartCombineBill.menu,
    desks: state.desks
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
    onClickClose: (menu) =>{
      dispatch(smartcombinebill_close(menu))
    },
    onClickOpenDesk: ( desk_id )=>{
      // alert("onClickOpenDesk")
      dispatch(apiOpenDesk(desk_id))
    },
    onClickCombineBill: (menu) =>{
      dispatch(apiCombineBill(menu))
    },
    onSmartcombinebill_dosome: (value) => {
      dispatch(smartcombinebill_dosome(value))
    },
  }
}

const SmartCombineBill = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbCombineBill)

export default SmartCombineBill