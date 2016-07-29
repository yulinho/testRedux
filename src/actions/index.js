import _ from "lodash"
// import {createStore} from 'redux'

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
//这个函数会返回一个 Action 对象，这个对象里描述了“页面发生了什么”。随后这个对象会被传入到 Reducer 中

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  }
}

export const openModal = () => {
  return {
    type: 'OPEN_MODAL'
  }
}
export const fetchDesks = () => {
  return {
    type: 'FETCH_DESKS'
  }
}


export const onClickDesk = (desk,bill) => {
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
export const smartopendesk_settingholdpeople = (holdpeople) => {
  // console.log(desk)
  return {
    type: 'SMARTOPENDESK_SETTINGHOLDPEOPLE',
    holdpeople
    // desk
  }
}
export const smartopendesk_settingholdpeople_plus = (value) => {
  // console.log(desk)
  return {
    type: 'SMARTOPENDESK_SETTINGHOLDPEOPLE_PLUS',
    value
    // desk
  }
}




export const onClickDialog = () => {
  // console.log(desk)
  return {
    type: 'DIALOG_ONCLICKDIALOG',
    // desk
  }
}

export const closeSmartOpenDesk  = (b) => {
  // console.log(desk)
  return {
    type: 'SMARTOPENDESK_CLOSE',
    // desk
  }
}
export const closeSmartDeskDetail  = (b) => {
  // console.log(desk)
  return {
    type: 'SMARTDESKDETAIL_CLOSE',
    // desk
  }
}
// export const openDesk  = (b) => {
//   // console.log(desk)
//   return {
//     type: 'SMARTOPENDESK_OPENDESK',
//     // desk
//   }
// }


export const smartdeskdetail_catepagechange  = (plus,pagecount) => {
  // console.log(desk)
  return {
    type: 'SMARTDESKDETAIL_CATEPAGECHANGE',
    plus,
    pagecount
  }
}
export const smartdeskdetail_menupagechange  = (plus,pagecount) => {
  // console.log(desk)
  return {
    type: 'SMARTDESKDETAIL_MENUPAGECHANGE',
    plus,
    pagecount
  }
}
export const smartdeskdetail_filterchange  = (value) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'MENUS_FILTER_MENUS',
    value
  }
}
export const smartdeskdetail_cateidchange  = (value) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'MENUS_CATEID_MENUS',
    value
  }
}
export const smartdeskdetail_menupagereset  = (value) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTDESKDETAIL_MENUPAGERESET',
    value
  }
}
export const smarttakemyorder_open  = (menu) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTTAKEMYORDER_OPEN',
    menu
  }
}
export const smarttakemyorder_close  = (menu) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTTAKEMYORDER_CLOSE',
    menu
  }
}

export const smartchangedesk_clickdesk  = (desk) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTCHANGEDESK_CLICKDESK',
    desk
  }
}

export const smartchangedesk_open  = (desk) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTCHANGEDESK_OPEN',
    // desk
  }
}
export const smartchangedesk_close  = (desk) => {
  // console.log(desk)
  // alert(value)
  return {
    type: 'SMARTCHANGEDESK_CLOSE',
    // desk
  }
}







export const apiFetchCates = () => {
  // const url = 'http://xxx.json';
  return function (dispatch,getState) {
    const url = "http://localhost/index.php?r=idc/default/cates";
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        // return responseJson.movies;
        dispatch( {
          type: 'FETCH_CATES',
          json: responseJson,
        })
        // dispatch(apiFetchBills());
      })
  };
};
export const apiFetchMenus = () => {
  // const url = 'http://xxx.json';
  return function (dispatch,getState) {
    const url = "http://localhost/index.php?r=idc/default/menus";
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        // return responseJson.movies;
        dispatch( {
          type: 'FETCH_MENUS',
          json: responseJson,
        })
        // dispatch(apiFetchBills());
      })
  };
};

export const apiFetchDesks = (cb) => {
  // const url = 'http://xxx.json';
  return function (dispatch,getState) {
    const url = "http://localhost/index.php?r=idc/default/desks";
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        // return responseJson.movies;
        dispatch( {
          type: 'FETCH_DESKS',
          json: responseJson,
        })
        dispatch(apiFetchBills(cb));
      })
    // .then(
    // function(res){
    //   console.log(res)
    // }
      // error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    // );
  };

        // console.log(sauce)
      // success => dispatch({
      //   type: 'FETCH_DESKS',
      //   success: success,
      //   // forPerson,
      //   // secretSauce
      // }

  // return fetch(url)
  // .then(response => {
  //   console.log(response)
  //   dispatch({
  //     type: 'FETCH_DESKS',
  //     message: response.json(),
  //   });
  // }, e => {
  //   dispatch({
  //     type: 'FETCH_DATA_FAIL',
  //     message: e,
  //   });
  // });
  // return {
  //   type: 'ASYNC'
  // }
};

export const apiFetchBills = (cb) => {
  return function (dispatch,getState) {
    let desks = getState().desks;
    desks = desks.filter(t=> t.status_id === 2)//(t => t.completed)
    // console.log(desks)
    let query = "";
    for (var i = 0; i< desks.length ; i++) {
      let desk = desks[i];
      query  += desk.bill_id + "|";
      
    }
    let url = "http://localhost/index.php?r=idc/default/bills&bill_ids="+query;
    // console.log(url);
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        // return responseJson.movies;
        // console.log(responseJson)
        dispatch( {
          type: 'FETCH_BILLS',
          json: responseJson,
        })
        dispatch(apiFetchOrders(cb));
      })
  };
};

export const apiFetchOrders = (cb) => {
  // console.log(store.getState())
  return function (dispatch,getState) {
    let desks = getState().desks;
    desks = desks.filter(t=> t.status_id === 2)//(t => t.completed)
    // console.log(desks)
    let query = "";
    for (var i = 0; i< desks.length ; i++) {
      let desk = desks[i];
      query  += desk.bill_id + "|";
      
    }
    let url = "http://localhost/index.php?r=idc/default/orders&bill_ids="+query;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        // return responseJson.movies;
        // console.log(responseJson)
        dispatch( {
          type: 'FETCH_ORDERS',
          json: responseJson,
        })
        cb && cb();
      })
  };
};


export const apiOpenDesk = (desk_id) => {
  return function (dispatch,getState) {
    // let desks = store.getState().desks;
    // desks = desks.filter(t=> t.status_id === 2)//(t => t.completed)
    // // console.log(desks)
    // let query = "";
    // for (var i = 0; i< desks.length ; i++) {
    //   let desk = desks[i];
    //   query  += desk.bill_id + "|";
      
    // }
    // let desk_id = store.getState().smartOpenDesk.desk.id;
    // let desk_id = store.getState().smartOpenDesk.desk.id;
    dispatch( {
      type: 'SMARTOPENDESK_DISABLED',
      // json: responseJson,
    })
    let url = "http://localhost/index.php?r=idc/default/opendesk&desk_id="+desk_id;
    // console.log(url);
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      // location.reload(true);
      // alert("done")
        // return responseJson.movies;
        // console.log(responseJson)


        dispatch( {
          type: 'SMARTOPENDESK_CLOSE',
          // json: responseJson,
        })

        dispatch(apiFetchDesks(()=>{
          let store = getState();
          let desk = store.desks.filter((desk)=>{
            return desk_id == desk.id; 
          })[0];
          let bill = store.bills.filter((bill)=>{
            return desk.bill_id == bill.id; 
          })[0];
          // console.log(bill);
          dispatch(onClickDesk(desk,bill));
        })); 
        // dispatch(onClickDesk(desk,bill));
        // dispatch(apiFetchBills(dispatch,store));
      })
  };
};

export const apiFetchChangeDesk = (sourcedesk_id,destdesk_id) => {
  return function (dispatch,getState) {
    dispatch( {
      type: 'SMARTDESKDETAIL_DISABLED',
      // json: responseJson,
    })
    // sourcedesk_id || sourcedesk_id = getState().smartDeskDetail.desk.id;
    // destdesk_id || sourcedesk_id = getState().smartChangeDesk.dest_desk.id;
    let _sourcedesk_id = sourcedesk_id ? sourcedesk_id : getState().smartDeskDetail.desk.id;
    let _sourcedesk =  getState().smartDeskDetail.desk;

    let _destdesk_id = destdesk_id ? destdesk_id : getState().smartChangeDesk.dest_desk.id;
    // let desk_id = getState().smartDeskDetail.desk.id;
    let url = "http://localhost/index.php?r=idc/default/changedesk&sourcedesk_id=" + _sourcedesk_id + "&destdesk_id=" + _destdesk_id;;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson.code !== 200){
          alert(responseJson.msg);
        }
        dispatch( { 
          type: 'SMARTCHANGEDESK_CLOSE',
          // json: responseJson,
        })
        dispatch( { 
          type: 'SMARTDESKDETAIL_CLOSE',
          // json: responseJson,
        })
        dispatch(apiFetchDesks(()=>{
          let store = getState();
          let desk = store.desks.filter((desk)=>{
            return _destdesk_id == desk.id; 
          })[0];
          let bill = store.bills.filter((bill)=>{
            return _sourcedesk.bill_id == bill.id; 
          })[0];
          // console.log(bill);
          dispatch(onClickDesk(desk,bill));
        }));
      })
  };
};



export const apiFetchCheckout = () => {
  // console.log(store.getState())
  return function (dispatch,getState) {
    dispatch( {
      type: 'SMARTDESKDETAIL_DISABLED',
      // json: responseJson,
    })

    let desk_id = getState().smartDeskDetail.desk.id;

    // let desks = getState().desks;
    // desks = desks.filter(t=> t.status_id === 2)//(t => t.completed)
    // console.log(desks)
    // let query = "";
    // for (var i = 0; i< desks.length ; i++) {
      // let desk = desks[i];
      // query  += desk.bill_id + "|";
      
    // }
    let url = "http://localhost/index.php?r=idc/default/checkout&desk_id="+desk_id;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson.code !== 200){
          alert(responseJson.msg);
        }
        dispatch( {
          type: 'SMARTDESKDETAIL_CLOSE',
          // json: responseJson,
        })
        dispatch(apiFetchDesks());
        // return responseJson.movies;
        // console.log(responseJson)
        // dispatch( {
          // type: 'FETCH_ORDERS',
          // json: responseJson,
        // })
      })
  };
};

export const apiTakeMyOrder = (menu) => {
  // console.log(store.getState())
  // console.log(menu);
  return function (dispatch,getState) {
    dispatch( {
      type: 'SMARTTAKEMYORDER_DISABLED',
      // json: responseJson,
    })

    let desk_id = getState().smartDeskDetail.desk.id;
    let menu_id = menu.id;

    // let desks = getState().desks;
    // desks = desks.filter(t=> t.status_id === 2)//(t => t.completed)
    // console.log(desks)
    // let query = "";
    // for (var i = 0; i< desks.length ; i++) {
      // let desk = desks[i];
      // query  += desk.bill_id + "|";
      
    // }
    let url = "http://localhost/index.php?r=idc/default/takemyorder&desk_id="+desk_id + "&menu_id="+menu_id;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson.code !== 200){
          alert(responseJson.msg);
        }
        dispatch( {
          type: 'SMARTTAKEMYORDER_CLOSE',
          // json: responseJson,
        })
        dispatch(apiFetchDesks());
        // dispatch(apiFetchDesks());
        // return responseJson.movies;
        // console.log(responseJson)
        // dispatch( {
          // type: 'FETCH_ORDERS',
          // json: responseJson,
        // })
      })
  };
};

export const apiFetchCancelbill = (menu) => {
  return function (dispatch,getState) {
    dispatch( {
      type: 'SMARTDESKDETAIL_DISABLED',
      // json: responseJson,
    })
    let desk_id = getState().smartDeskDetail.desk.id;
    // let menu_id = menu.id;
    let url = "http://localhost/index.php?r=idc/default/cancelbill&desk_id="+desk_id ;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson.code !== 200){
          alert(responseJson.msg);
        }
        dispatch( {
          type: 'SMARTDESKDETAIL_CLOSE',
          // json: responseJson,
        })
        dispatch(apiFetchDesks());

      })
  };
};


export const apiFetchCancelorder = (order) => {
  return function (dispatch,getState) {
    dispatch( {
      type: 'SMARTDESKDETAIL_DISABLED',
      // json: responseJson,
    })
    let order_id = order.id;//getState().smartDeskDetail.desk.id;
    // let menu_id = menu.id;
    let url = "http://localhost/index.php?r=idc/default/cancelorder&order_id=" + order_id ;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson.code !== 200){
          alert(responseJson.msg);
        }
        dispatch( {
          type: 'SMARTDESKDETAIL_CLOSE',
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
          dispatch(onClickDesk(desk,bill));
        }));

      })
  };
};


export const apiFetchSetorderdiscount = (order) => {
  return function (dispatch,getState) {
    dispatch( {
      type: 'SMARTDESKDETAIL_DISABLED',
      // json: responseJson,
    })
    let order_id = order.id;//getState().smartDeskDetail.desk.id;
    // let menu_id = menu.id;
    let url = "http://localhost/index.php?r=idc/default/setorderdiscount&order_id=" + order_id ;
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        if(responseJson.code !== 200){
          alert(responseJson.msg);
        }
        dispatch( {
          type: 'SMARTDESKDETAIL_CLOSE',
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
          dispatch(onClickDesk(desk,bill));
        }));

      })
  };
};





