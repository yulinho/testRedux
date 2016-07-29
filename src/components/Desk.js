import React, { PropTypes } from 'react'
import styles from './Desks.css';

const Desk = ({ onClick, completed, desk ,bill ,className ,disabled}) => {
  // console.log(bill)
  let finalcost = 0
  if (bill) {
    finalcost = bill.finalcost
  }
  // console.log(className)
  return (
      <div 
      // className={desk.status_id===2?styles.desk2:styles.desk} 
      className = {
        (typeof(className) !== 'undefined') ? styles[className] :
        (desk.status_id===2 && styles.desk2 ||
        desk.status_id===1 && styles.desk)
      }
      style={{
        textDecoration: completed ? 'line-through' : 'none' ,
        opacity: disabled ? "0.6" : "1",
        backgroundColor: disabled ? "red" : ""
      }}
      onClick={()=>{
        // console.log(desk)
        disabled ? alert("就餐中不能换到这台") :
        onClick(desk)
      }}>
        <div className={styles.title}>
        {desk.name}
        </div>
        <div className={styles.status}>
        {desk.status_id===2 && "就餐("+finalcost+"元)" ||
        desk.status_id===1 && "可供" }
        </div>
        <div className={styles.content}>
        可供{desk.holdpeople}人用餐
        </div>
      </div>
)
}

Desk.propTypes = {
  onClick: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  // text: PropTypes.string.isRequired
}

export default Desk