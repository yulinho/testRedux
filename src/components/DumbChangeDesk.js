import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './css/DumbChangeDesk.css'
import SmartDialog from '../containers/SmartDialog'
import Desk from './Desk'

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
let DumbChangeDesk = ({dest_desk,onClickChangeDesk,desk,desks,onClickOpenDesk,size ,visable,title ,onClickClose ,disabled ,buttonTitle,bill ,source_desk , onClickDesk}) => {//active, children, onClick
  // console.log(desk);
  // if (active) {
  //   return <span>{children}</span>
  // }
  // console.log(desk)
  // return (<div>test</div>)
  // let holdpeople = desk.holdpeople;
  // let isdisabled = disabled ? "disabled" : "";
  // console.log(dest_desk)
  let opts = {};
  if (disabled) {
      opts['disabled'] = 'disabled';
  }
  return (
    <SmartDialog size={size} visable={visable} onClickClose={onClickClose} title={title}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.middle}>
            <div className={styles.desks}>
              <ul>
              {desks.map(desk => {
                // let bill = _.find(bills, function(o) { return o.id === desk.bill_id; });
                // let orders4bill = _.filter(orders, function(o) { return o.bill_id === desk.bill_id; });
                // console.log(orders4bill)
                return (<li><Desk className="desk-change" disabled={ desk.status_id !== 1 ? true : false }
                  key={desk.id}
                  desk = {desk}
                  bill = {bill} //...desk ==> {desks:[]}
                  // orders = {orders4bill}
                  onClick={() => {
                    // console.log(bill)
                    // console.log(orders4bill)
                    onClickDesk(desk)
                  }}
                /></li>)
              })}
              </ul>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.inner}>
                      <Button bsStyle="warning" {...opts} disabled={true} className={styles.submit}>{ source_desk ? source_desk.name : "source_desk_name"}</Button>
                        ==>>
                      <Button bsStyle="warning" {...opts} disabled={true} className={styles.submit}>{ dest_desk ? dest_desk.name : "dest_desk_name"}</Button>
                        =
                      <Button bsStyle="warning" {...opts} disabled={!dest_desk} onClick={()=>{
                          onClickChangeDesk();
                        }} className={styles.submit}>{buttonTitle}</Button>
              
            </div>
          </div>

        </div>
      </div>
    </SmartDialog>
  )
}

DumbChangeDesk.propTypes = {
  // active: PropTypes.bool.isRequired,
  // children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired
}

DumbChangeDesk = connect()(DumbChangeDesk)
export default DumbChangeDesk