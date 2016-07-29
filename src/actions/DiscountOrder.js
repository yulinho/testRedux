export const smartdiscountorder_open  = (menu) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTDISCOUNTORDER_OPEN',
    menu
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
export const smartdiscountorder_dosome  = (value) => {
  // console.log("do")
  // alert(value)
  return {
    type: 'SMARTDISCOUNTORDER_DOSOME',
    value
  }
}

