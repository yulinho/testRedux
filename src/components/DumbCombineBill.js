import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './css/DumbCombineBill.css'
import SmartDialog from '../containers/SmartDialog'

import { Button ,ButtonGroup,DropdownButton ,MenuItem ,Modal,Tabs,Tab,FormGroup ,ControlLabel ,FormControl ,HelpBlock ,Glyphicon
,InputGroup ,
Form ,
Col ,
Checkbox ,
Radio,
ButtonToolbar
 } from 'react-bootstrap';

var buttonStyle = {
  backgroundColor:"white"
};
let DumbCombineBill = ({desks,desk,onSmartcombinebill_dosome,size ,visable,title ,onClickClose ,disabled ,buttonTitle ,value}) => {//active, children, onClick
  // console.log(desk);
  // if (active) {
  //   return <span>{children}</span>
  // }
  // console.log(desk)


  return (
    <SmartDialog size={size} visable={visable} onClickClose={onClickClose} title={title}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.middle}>


            <div className="tips">
              请选择要转到的台号，然后确认转台：
            </div>
            <div className={styles.desks}>
              <ul>
              {desks.map(desk => {
                // let bill = _.find(bills, function(o) { return o.id === desk.bill_id; });
                // let orders4bill = _.filter(orders, function(o) { return o.bill_id === desk.bill_id; });
                // console.log(orders4bill)
                return (<li><Button bsStyle={ desk.status_id !== 1 ? "danger" : "success" } onClick={() => {
                    // console.log(bill)
                    // console.log(orders4bill)
                    onClickDesk(desk)
                  }}
                  disabled={ desk.status_id !== 1 ? true : false }>{desk.name}</Button></li>)
              })}
              </ul>
            </div>


            <br/>
            <p className="tips"><span>下单后帐单总额:</span>元</p>
          </div>
          <div className={styles.footer}>
            <Button bsStyle="warning" disabled={disabled} onClick={()=>{
                onSmartcombinebill_dosome(value);
              }} className={styles.submit}>{buttonTitle}</Button>
          </div>
        </div>
      </div>
    </SmartDialog>
  )
}

DumbCombineBill.propTypes = {
  // active: PropTypes.bool.isRequired,
  // children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired
}

DumbCombineBill = connect()(DumbCombineBill)
export default DumbCombineBill