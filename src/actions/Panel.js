export const smartpanel_open  = (menu) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTPANEL_OPEN',
    menu
  }
}
export const smartpanel_close  = (menu) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTPANEL_CLOSE',
    menu
  }
}
export const smartpanel_dosome  = (value) => {
  // console.log("do")
  // alert(value)
  return {
    type: 'SMARTPANEL_DOSOME',
    value
  }
}


export const smartpanel_clickdesk = (desk,bill) => {
  // console.log(orders);
  // console.log(bill);
  // console.log(desk);
  switch(desk.status_id){
    case 1:
      return {
        type: 'SMARTOPENDESK_OPEN',
        desk,
        // bill,
        // orders
      }
    case 2:
      return {
        type: 'SMARTDESKDETAIL_OPEN',
        desk,
        bill,
        // orders
      }
    default:
      console.log("onClickDesk with no type");
      return{};

  }
}

export const smartpanel_next  = (value) => {
  // console.log("do")
  // alert(value)
  return {
    type: 'SMARTPANEL_NEXT',
    value
  }
}
