import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './css/DumbOpenDesk.css'
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
let DumbOpenDesk = ({ onSmartopendesk_settingholdpeople_plus ,onSmartopendesk_settingholdpeople,holdpeople,desk,onClickOpenDesk,size ,visable,title ,onClickClose ,disabled ,buttonTitle}) => {//active, children, onClick
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
            <table>
              <tr>
                <td>
                  <span>人数:</span>
                </td>
                <td>
                  <ButtonToolbar>
                    <ButtonGroup bsSize="large">
                      <Button onClick={()=>{
                        onSmartopendesk_settingholdpeople_plus(-1);
                      }} >-</Button>
                      <Button>

                                 <input placeholder="请输入就餐人数" value={holdpeople} onChange={(e)=>{
                                  // console.log(e)
                                  let value = e.target.value;
                                  onSmartopendesk_settingholdpeople(value);
                                 // onSmartdeskdetail_filterchange(value);

                                 }}/>
                      </Button>
                      <Button onClick={()=>{
                        onSmartopendesk_settingholdpeople_plus(1);
                      }} >+</Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </td>
              </tr>
            </table>
            

          </div>
          <div className={styles.footer}>
          <Button bsStyle="warning" {...opts} onClick={()=>{
              onClickOpenDesk(desk.id,holdpeople);
            }} className={styles.submit}>{buttonTitle}</Button>
          </div>
        </div>
      </div>
    </SmartDialog>
  )
}

DumbOpenDesk.propTypes = {
  // active: PropTypes.bool.isRequired,
  // children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired
}

DumbOpenDesk = connect()(DumbOpenDesk)
export default DumbOpenDesk