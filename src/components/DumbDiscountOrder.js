import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './css/DumbDiscountOrder.css'
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
let DumbDiscountOrder = ({onSmartdiscountorder_setdiscount,discount,order,desk,onSmartdiscountorder_dosome,size ,visable,title ,onClickClose ,disabled ,buttonTitle ,value}) => {//active, children, onClick
  // console.log(desk);
  // if (active) {
  //   return <span>{children}</span>
  // }
  // console.log(desk)

  let currentprice = order ? order.currentprice : 0;
  let count = order ? order.count : 0;
  // let discount = order ? ...order.discount : 1;
  return (
    <SmartDialog size={size} visable={visable} onClickClose={onClickClose} title={title}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.middle}>
            <table>
              <tr>
                <td>
                  <span>原价:</span>
                </td>
                <td>
                   {currentprice}元
                </td>
              </tr>
              <tr>
                <td>
                  <span>折扣:</span>
                </td>
                <td>
                  <ButtonToolbar>
                    <ButtonGroup bsSize="large">
                      <Button disabled={true} onClick={()=>{
                        onSmarttakemyorder_settingcount_plus(-1);
                      }} >-</Button>
                      <Button><input style={{textAlign:"center"}} value={discount}  onChange={(e)=>{
                            // console.log(e)
                            let value = e.target.value;
                            onSmartdiscountorder_setdiscount(value);
                           // onSmartdeskdetail_filterchange(value);

                           }}/></Button>
                      <Button disabled={true} onClick={()=>{
                        onSmarttakemyorder_settingcount_plus(1);
                      }} >+</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </td>
              </tr>
              <tr>
                <td>
                  <span>折后:</span>
                </td>
                <td>
                  {currentprice*discount} 元
                </td>
              </tr>
              <tr>
                <td>
                  <span>金额:</span>
                </td>
                <td>
                   {currentprice*discount} x {count} = {currentprice*discount*count} 元
                </td>
              </tr>
            </table>
            <p className="tips"><span>提示:如8折，则输入0.8</span></p>
          </div>
          <div className={styles.footer}>
            <Button bsStyle="warning" disabled={disabled} onClick={()=>{
                onSmartdiscountorder_dosome(order,discount);
              }} className={styles.submit}>{buttonTitle}</Button>
          </div>
        </div>
      </div>
    </SmartDialog>
  )
}

DumbDiscountOrder.propTypes = {
  // active: PropTypes.bool.isRequired,
  // children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired
}

DumbDiscountOrder = connect()(DumbDiscountOrder)
export default DumbDiscountOrder