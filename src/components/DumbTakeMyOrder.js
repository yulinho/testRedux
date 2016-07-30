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
let DumbTakeMyOrder = ({bill,count,onSmarttakemyorder_settingcount_plus,desk,onClickTakeMyOrder,size ,visable,title ,onClickClose ,disabled ,buttonTitle ,menu}) => {//active, children, onClick
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
 let price = menu ? menu.price : 0;
 let rawcost = bill ? bill.rawcost : 0;
  return (
    <SmartDialog size={size} visable={visable} onClickClose={onClickClose} title={title}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.middle}>
            <table>
              <tr>
                <td>
                  <span>单价:</span>
                </td>
                <td>
                   元
                </td>
              </tr>
              <tr>
                <td>
                  <span>数量:</span>
                </td>
                <td>
                  <ButtonToolbar>
                    <ButtonGroup bsSize="large">
                      <Button onClick={()=>{
                        onSmarttakemyorder_settingcount_plus(-1);
                      }} >-</Button>
                      <Button><input style={{textAlign:"center"}} value={count}/></Button>
                      <Button onClick={()=>{
                        onSmarttakemyorder_settingcount_plus(1);
                      }} >+</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </td>
              </tr>
              <tr>
                <td>
                  <span>金额:</span>
                </td>
                <td>
                  {price * count} 元
                </td>
              </tr>
            </table>
            <br/>
            <p className="tips"><span>下单后帐单总额:</span>{price * count + rawcost }元 (原价)</p>
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