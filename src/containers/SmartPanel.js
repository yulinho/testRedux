import { connect } from 'react-redux'
import { smartpanel_next , smartpanel_clickdesk , smartpanel_dosome ,smartpanel_close , setVisibilityFilter,closeSmartPanel ,openDesk ,apiOpenDesk,smarttakemyorder_close,apiPanel } from '../actions/Panel'
import DumbPanel from '../components/DumbPanel'
import _ from 'lodash'

const mapStateToProps = (state, ownProps) => {
  return {
    visable: state.smartPanel.visable,
    size: state.smartPanel.size,
    title: state.smartPanel.title + " - SmartPanel",
    desk: state.smartPanel.desk,
    disabled: state.smartPanel.disabled,
    buttonTitle: state.smartPanel.buttonTitle ,
    menu: state.smartPanel.menu,
    index: state.smartPanel.index,
    bills : {
      all: state.bills
    },
    desks: {
      all: state.desks,
      chunked: _.chunk(state.desks, 20)
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    },
    onClickClose: (menu) =>{
      dispatch(smartpanel_close(menu))
    },
    onClickOpenDesk: ( desk_id )=>{
      // alert("onClickOpenDesk")
      dispatch(apiOpenDesk(desk_id))
    },
    onClickPanel: (menu) =>{
      dispatch(apiPanel(menu))
    },
    onSmartpanel_dosome: (desk,bill) => {
      // console.log(desk)
      // console.log(bill)
      dispatch(smartpanel_clickdesk(desk,bill))
    },
    onSmartpanel_next: (value) => {
      dispatch(smartpanel_next(value))
    },
  }
}

const SmartPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbPanel)

export default SmartPanel