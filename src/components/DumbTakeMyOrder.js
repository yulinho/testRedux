import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './css/DumbTakeMyOrder.css'
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
let DumbTakeMyOrder = ({desk,onClickTakeMyOrder,size ,visable,title ,onClickClose ,disabled ,buttonTitle ,menu}) => {//active, children, onClick
  // console.log(desk);
  // if (active) {
  //   return <span>{children}</span>
  // }
  // console.log(desk)
  // return (<div>test</div>)
  // let holdpeople = desk.holdpeople;
  // let isdisabled = disabled ? "disabled" : "";
  let opts = {};
  if (disabled) {
      opts['disabled'] = 'disabled';
  }
  return (
    <SmartDialog size={size} visable={visable} onClickClose={onClickClose} title={title}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.middle}>
            <span>数量:</span>
            <ButtonToolbar>
              <ButtonGroup bsSize="large">
                <Button>-</Button>
                <Button><input defaultValue={1}/></Button>
                <Button>+</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          <div className={styles.footer}>
            <Button bsStyle="warning" {...opts} onClick={()=>{
                onClickTakeMyOrder(menu);
              }} className={styles.submit}>{buttonTitle}</Button>
          </div>
        </div>
      </div>
    </SmartDialog>
  )
}

DumbTakeMyOrder.propTypes = {
  // active: PropTypes.bool.isRequired,
  // children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired
}

DumbTakeMyOrder = connect()(DumbTakeMyOrder)
export default DumbTakeMyOrder