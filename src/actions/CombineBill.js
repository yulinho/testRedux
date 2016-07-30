export const smartcombinebill_open  = (menu) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTCOMBINEBILL_OPEN',
    menu
  }
}
export const smartcombinebill_close  = (menu) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTCOMBINEBILL_CLOSE',
    menu
  }
}
export const smartcombinebill_dosome  = (value) => {
  // console.log("do")
  // alert(value)
  return {
    type: 'SMARTCOMBINEBILL_DOSOME',
    value
  }
}

