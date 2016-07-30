import React, { PropTypes } from 'react'
import Todo from './Todo'
import Desk from './Desk'
import styles from './Desks.css'
import { connect } from 'react-redux'
import { fetchDesks } from '../actions'
import { getThenShow } from '../actions'
import _ from 'lodash'
import { Button ,ButtonGroup,DropdownButton ,MenuItem ,Modal,Tabs,Tab,FormGroup ,ControlLabel ,FormControl ,HelpBlock ,Glyphicon
,InputGroup ,
Form ,
Col ,
Checkbox ,
Radio,
ButtonToolbar
 } from 'react-bootstrap';
/*
  <button onClick={
    ()=> 
      // dispatch(fetchDesks("id"))
      dispatch(getThenShow(dispatch))
  }/>*/
let Desks = ({ desks,bills,orders, onClickDesk ,dispatch }) => {
  // console.log(orders)
  return (
    <div className={styles.desks}>
    <ul>
  
    {desks.map(desk => {
      let bill = _.find(bills, function(o) { return o.id === desk.bill_id; });
      // let orders4bill = _.filter(orders, function(o) { return o.bill_id === desk.bill_id; });
      // console.log(orders4bill)
      // <Desk 
      //   key={desk.id}
      //   desk = {desk}
      //   bill = {bill} //...desk ==> {desks:[]}
      //   // orders = {orders4bill}
      //   onClick={() => {
      //     // console.log(bill)
      //     // console.log(orders4bill)
      //     onClickDesk(desk,bill)
      //   }}
      // />
      return (<li><Button bsStyle={ desk.status_id !== 1 ? "success" : "danger" } onClick={() => {
                    // console.log(bill)
                    // console.log(orders4bill)
                    onClickDesk(desk)
                  }}
                  // disabled={ desk.status_id !== 1 ? true : false }
                  >{desk.name}</Button></li>)
    }
      
    )}
  
    </ul>
    </div>
)
}

Desks.propTypes = {
  desks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    // completed: PropTypes.bool.isRequired,
    // text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClickDesk: PropTypes.func.isRequired
}

Desks = connect()(Desks)
export default Desks