import React, { PropTypes } from 'react'
import Todo from './Todo'
import Desk from './Desk'
import styles from './Desks.css'
import { connect } from 'react-redux'
import { fetchDesks } from '../actions'
import { getThenShow } from '../actions'
import _ from 'lodash'
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
      return (<li><Desk 
        key={desk.id}
        desk = {desk}
        bill = {bill} //...desk ==> {desks:[]}
        // orders = {orders4bill}
        onClick={() => {
          // console.log(bill)
          // console.log(orders4bill)
          onClickDesk(desk,bill)
        }}
      /></li>)
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