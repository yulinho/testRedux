import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './css/DumbPanel.css'
import SmartDialog from '../containers/SmartDialog'
import _ from 'lodash'

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
let DumbPanel = ({ bills , index ,onSmartpanel_next,desks,onSmartpanel_dosome,size ,visable,title ,onClickClose ,disabled ,buttonTitle ,value}) => {//active, children, onClick
  // console.log(desks);
  // if (active) {
  //   return <span>{children}</span>
  // }
  // console.log(desk)

  // let 
  let rows = _.chunk(desks.chunked[index],4);
  // let maps = Array.from({ length: 4 }, (val, key) => key)
  // console.log(maps);
  // console.log(rows) //rows
  return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.middle}>
            <div className={styles.desks}>
              <table>          
              { Array.from({ length: 5 }, (val, key) => {                
                let row = rows[key];
                return(<tr>        
                  { Array.from({ length: 4 }, (val2, key2) => {      
                    let bill =  row ? _.find(bills.all, function(bill){ return row[key2] ? bill.id == row[key2].bill_id : false}) : "";
                    // console.log(bill)
                    let finalcost = bill ? bill.finalcost : 0;
                    return row && row[key2] ? <td><Button bsStyle={ row[key2].status_id !== 1 ? "danger" : "success" } onClick={() => {
                    // console.log(bill)
                    // console.log(orders4bill)
                    onSmartpanel_dosome(row[key2],bill)//(row[key2])
                  }}
                  >{row[key2].name}{ row[key2].status_id !== 1 ? " - " + finalcost + "元" : ""}</Button></td>  : <td></td>
                  })}

                  </tr>)
              })}
              </table>    
            </div>
          </div>
          <div className={styles.footer}>
            <Button bsStyle="warning" disabled={index === 0 ? true :false } onClick={()=>{
                onSmartpanel_next(-1);
              }} className={styles.submit}> 《《 </Button>
            <Button bsStyle="default"  className={styles.footer_info} disabled>{index+1}/{desks.chunked.length}({desks.all.length})</Button>  
            <Button bsStyle="warning" disabled={index === desks.chunked.length - 1 ? true :false } onClick={()=>{
                onSmartpanel_next(1);
              }} className={styles.submit}> 》》 </Button>
          </div>
        </div>
      </div>
  )
}

DumbPanel.propTypes = {
  // active: PropTypes.bool.isRequired,
  // children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired
}

DumbPanel = connect()(DumbPanel)
export default DumbPanel