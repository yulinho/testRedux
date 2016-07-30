import {apiFetchDesks,onClickDesk} from './index'
export const smartdiscountorder_open  = (order) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTDISCOUNTORDER_OPEN',
    order
  }
}
export const smartdiscountorder_close  = (menu) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTDISCOUNTORDER_CLOSE',
    menu
  }
}
export const smartdiscountorder_api_dosome  = (order,discount) => {
  return function (dispatch,getState) {
    dispatch( {
      type: 'SMARTDESKDETAIL_DISABLED',
      // json: responseJson,
    })
    let order_id = order.id;
    // let order_id = order.id;//getState().smartDeskDetail.desk.id;
    // let menu_id = menu.id;
    let url = "http://localhost/index.php?r=idc/default/setorderdiscount&order_id=" + order_id + "&discount=" + discount ;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson.code !== 200){
          alert(responseJson.msg);
        }
        dispatch( {
          type: 'SMARTDISCOUNTORDER_CLOSE',
          // json: responseJson,
        })
        dispatch(apiFetchDesks(()=>{
          let store = getState();
          let bill = store.bills.filter((bill)=>{
            return order.bill_id == bill.id; 
          })[0];
          let desk = store.desks.filter((desk)=>{
            return bill.desk_id == desk.id; 
          })[0];
          // console.log(bill);
          // alert(bill)
          dispatch(onClickDesk(desk,bill));
        }));

      })
  };
};
export const smartdiscountorder_setdiscount  = (discount) => {
  // console.log("do")
  // alert(discount)
  return {
    type: 'SMARTDISCOUNTORDER_SETDISCOUNT',
    discount
  }
}


