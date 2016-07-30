import React, { PropTypes } from 'react'
import styles from './css/DumbDeskDetail.css'

import { Button ,ButtonGroup,DropdownButton ,MenuItem ,Modal,Tabs,Tab,FormGroup ,ControlLabel ,FormControl ,HelpBlock ,Glyphicon
,InputGroup ,
Form ,
Col ,
Checkbox ,
Radio,
Table
 } from 'react-bootstrap';
import SmartDialog from '../containers/SmartDialog'

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
const DumbDeskDetail = ({onSetorderdiscount , onClickCancelOrder , desk,bill,orders,cates,menus,size ,visable ,onClickClose,onClickCheckout,buttonTitle,buttonTitle2,buttonTitle3,buttonTitle4,disabled,title,cate_index,menu_index,onSmartdeskdetail_catepagechange,onSmartdeskdetail_menupagechange,onSmartdeskdetail_filterchange,onSmartdeskdetail_cateidchange ,onSmartTakeMyOrder ,onClickButton2,onClickButton3,onClickButton4}) => {//active, children, onClick
  if (!desk || !bill) {
  return <div></div>
  }
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
    //                  { (cates.chunked[2].length < 10) ? <Button disabled style={{margin: (10 -cates.chunked[2].length) * 4 + "px",flex: (10 -cates.chunked[2].length) *0.1}}>nomore</Button> : ""}

  let opts = {};
  if (disabled) {
      opts['disabled'] = 'disabled';
  }

  return (
    <SmartDialog size={size} visable={visable} onClickClose={onClickClose} title={title}>
      <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}> 
          <div className={styles.left_inner}>
            <div className={styles.left_inner_header}>
              <Table  className={styles.left_inner_header_table} >
                <tbody>
                  <tr>
                    <td>单号</td>
                    <td>{desk.bill_id}</td>
                    <td>开台时间</td>
                    <td>{desk.lastopen_at}</td>
                    <td>应收</td>
                    <td><span className="ft-orange">{bill.finalcost}</span> 元</td>
                  </tr>
                  <tr>
                    <td>原价</td>
                    <td>{bill.rawcost}</td>
                    <td>优惠</td>
                    <td>{ Math.round((bill.rawcost - bill.finalcost)*100)/100}</td>
                    <td>综合折扣</td>
                    <td>{  bill.finalcost > 0 ? Math.round((bill.finalcost/ bill.rawcost)*100)/10 +"折" : "无折扣" }</td>
                  </tr>
                  <tr>
                    <td>开台</td>
                    <td>{bill.user_realname}</td>
                    <td>会员</td>
                    <td>{bill.member_user_name}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>人数</td>
                    <td>{bill.people}</td>
                    <td>班制</td>
                    <td>{bill.timebucket_name}</td>
                    <td>来自</td>
                    <td>{bill.comefrom}</td>
                  </tr>
                </tbody>
              </Table>
              
            </div>       
            <div className={styles.left_inner_content}>
              <pre className={styles.ordered}>
                <Table className={styles.table2}>
                  <thead>
                    <tr>
                      <th style={{textAlign:"center"}}>菜品</th>
                      <th>标价</th>
                      <th>数量</th>
                      <th>折扣</th>
                      <th>实收</th>
                      <th>下单</th>
                      <th style={{textAlign:"center"}}>操作</th>
                    </tr>
                  </thead>
                  <tbody>

                  {orders.map(order => {
                    return (
                    <tr>
                      <td style={{width:"100%",whiteSpace: "pre-wrap"}}>
                        {order.menu_name}
                      </td>
                      <td>{order.currentprice}</td>
                      <td>{order.count}</td>
                      <td>{order.discount}</td>
                      <td>{order.finalcost}</td>
                      <td>{order.user_id}</td>
                      <td>                  
                        <Button onClick={e => {
                           e.preventDefault()
                           // confirm("are you sure to set the order [" + order.menu_name + "] discount?") && 
                           onSetorderdiscount(order)
                           // alert("onHide") 
                         }}>打折</Button>
                        <Button onClick={e => {
                           e.preventDefault()
                           confirm("are you sure to cancel the order [" + order.menu_name + "] ?") && onClickCancelOrder(order)
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
            
          </div>       
        </div>
        <div className={styles.right}>
          <div className={styles.right_content}>
            <div className={styles.rc_left}>         
              <div className={styles.all}>
                        <Button onClick={e => {
                           e.preventDefault()
                           onSmartdeskdetail_cateidchange(null)
                           // alert("onHide")
                         }}>all</Button>
                           
              </div>   
              <div className={styles.cates}>
                  {cates.chunked.length > 0 && cates.chunked[cate_index].map((cate, i) => {
                    return (
                        <Button  bsStyle="warning"  onClick={e => {
                           e.preventDefault()
                           onSmartdeskdetail_cateidchange(cate.id)
                           // alert("onHide")
                         }}>{cate.name}</Button>
                    )
                    })
                  }
              </div>
              <div className={styles.navs}>                         
                      <Button  disabled={cate_index===0} bsStyle="success" onClick={e => {
                         e.preventDefault()
                           onSmartdeskdetail_catepagechange(-1)
                         // alert("onHide")
                       }}>《</Button>
                      <Button  disabled={cate_index===cates.chunked.length-1} bsStyle="success" onClick={e => {
                         e.preventDefault()
                           onSmartdeskdetail_catepagechange(1)
                         // alert("onHide")
                       }}>》</Button>
              </div>                         

            </div>
            <div className={styles.right}>
              <div className={styles.search}>
                           <input placeholder="模糊查询" defaultValue={menus.filter} onChange={(e)=>{
                            // console.log(e)
                            let value = e.target.value;
                           onSmartdeskdetail_filterchange(value);

                           }}/>
              </div>   
              <div className={styles.menus} >

                  {menus.chunked.length > 0 && menus.chunked[menu_index].map((menu, i) => {
                    return (
                        <Button disabled={disabled} bsStyle="warning"  onClick={e => {
                           e.preventDefault()
                           onSmartTakeMyOrder(menu)
                           // alert("onHide")
                         }}>{menu.name} - {menu.price}元</Button>
                    )
                    })
                  }
                  {menus.chunked.length === 0 && <div className={styles.tips}>[{menus.cate_id === null ? "所有": cates.all.filter((cate)=>{
                    return cate.id == menus.cate_id;
                  })[0].name }] 分类中木有含"{menus.filter}"的结果</div>                  }
              </div>   
              <div className={styles.navs}>
                           
                        <Button  disabled={menu_index===0} bsStyle="success" onClick={e => {
                           e.preventDefault()
                           onSmartdeskdetail_menupagechange(-1)
                           // alert("onHide")
                         }}>《</Button>
                        <Button disabled={menus.chunked.length===0 || menu_index===menus.chunked.length-1} bsStyle="success" onClick={e => {
                           e.preventDefault()
                           onSmartdeskdetail_menupagechange(1)
                           // alert("onHide")
                         }}>》</Button>
              </div>   
                         

            </div>   
          </div>
          <div className={styles.right_footer}>
                      <Button bsStyle="danger"  {...opts} onClick={e => {
                         e.preventDefault()
                         confirm("are you sure to cancel the bill?") && onClickButton4()
                         // alert("onHide")
                       }}>{buttonTitle4}</Button>
                      <Button bsStyle="info"  {...opts} onClick={e => { //转台
                         e.preventDefault()
                         // onClickButton2(desk.id,23)
                          onClickButton2(desk)
                         // alert("onHide")
                       }}>{buttonTitle2}</Button>
                      <Button bsStyle="info"  {...opts} onClick={e => { //拼单
                         e.preventDefault()
                         onClickButton3()
                         // alert("onHide")
                       }}>{buttonTitle3}</Button>
                      <Button bsStyle="warning"  {...opts} onClick={e => {
                         e.preventDefault()
                         // onClickCheckout()
                         confirm("are you sure to checkout bill?") && onClickButton4()
                         // alert("onHide")
                       }}>{buttonTitle}</Button>
                       

          </div>

        </div>
          
      </div>

      </div>

    </SmartDialog>
  )
}

DumbDeskDetail.propTypes = {
  // active: PropTypes.bool.isRequired,
  // children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired
}

export default DumbDeskDetail