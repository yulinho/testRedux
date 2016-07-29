import React, { PropTypes } from 'react'
import styles from './deskDetail.css'

import { Button ,ButtonGroup,DropdownButton ,MenuItem ,Modal,Tabs,Tab,FormGroup ,ControlLabel ,FormControl ,HelpBlock ,Glyphicon
,InputGroup ,
Form ,
Col ,
Checkbox ,
Radio,
Table
 } from 'react-bootstrap';

var buttonStyle = {
  backgroundColor:"white"
};

/*
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>*/
const deskDetail = ({desk,bill,orders}) => {//active, children, onClick
  // console.log(orders)
  // if (active) {
  //   return <span>{children}</span>
  // }
  // console.log(desk)
  /*
    <form>
      <FormGroup controlId="formValidationSuccess1" validationState="success">
        <ControlLabel>输入就餐人数</ControlLabel>
        <FormControl type="text" value={desk.holdpeople}/>
        <HelpBlock>准确输入将有助于人流统计等报表.</HelpBlock>
      </FormGroup>
      <Button bsStyle="warning" className={styles.submit}>结账</Button>
      <Button bsStyle="warning" className={styles.submit}>转台</Button>
      <Button bsStyle="danger" className={styles.submit}>撤单</Button>
      <Button bsStyle="info" className={styles.submit}>返回</Button>
    </form>

    <div className={styles.name}>【{desk.name}】详情</div>
    */
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.left}>        
        <Table responsive>
          <tbody>
            <tr>
              <td>单号</td>
              <td>{desk.bill_id}</td>
              <td>开台时间</td>
              <td>{desk.lastopen_at}</td>
              <td>应收</td>
              <td>{bill.finalcost}</td>
            </tr>
            <tr>
              <td>原价</td>
              <td>{bill.rawcost}</td>
              <td>优惠</td>
              <td>{bill.rawcost - bill.finalcost}</td>
              <td>综合折扣</td>
              <td>{  Math.round((bill.finalcost/ bill.rawcost)*100)/10 }折</td>
            </tr>
            <tr>
              <td>开台</td>
              <td>{bill.user_realname}</td>
              <td>会员</td>
              <td>{bill.member_user_name}</td>
              <td>来自</td>
              <td>{bill.comefrom}</td>
            </tr>
          </tbody>
        </Table>
        <pre className={styles.ordered}>

          <Table responsive>
            <thead>
              <tr>
                <th>菜品</th>
                <th>标价</th>
                <th>数量</th>
                <th>折扣</th>
                <th>实收</th>
                <th>下单</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>

            {orders.map(order => {
              return (
              <tr>
                <td>{order.menu_name}</td>
                <td>{order.rawcost}</td>
                <td>{order.rawcost}</td>
                <td>{order.count}</td>
                <td>{order.finalcost}</td>
                <td>{order.user_id}</td>
                <td>                  
                  <Button onClick={e => {
                     e.preventDefault()
                     onClick()
                     // alert("onHide")
                   }}>打折</Button>
                  <Button onClick={e => {
                     e.preventDefault()
                     onClick()
                     // alert("onHide")
                   }}>撤菜</Button>
                </td>
              </tr>)
              })
            }
            </tbody>
          </Table>
        </pre>
      </div>
      <div className={styles.right}>right</div>
        
    </div>

    </div>
  )
}

deskDetail.propTypes = {
  // active: PropTypes.bool.isRequired,
  // children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired
}

export default deskDetail