import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Button from '../components/Button'
const {BrowserWindow} = require('electron').remote

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // dispatch(setVisibilityFilter(ownProps.filter))
      alert("button")
   // if(typeof(action.text)!='undefined'){
    // let win = new BrowserWindow({width: 800, height: 600});
    // win.loadURL("http://lulu.indare.com/index.php?r=baseus/default");
   // }
    }
  }
}

const EnhButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default EnhButton