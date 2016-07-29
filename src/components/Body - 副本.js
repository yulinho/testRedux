import React from 'react'
import FilterLink from '../containers/FilterLink'
import styles from './Body.css'
import { openModal } from '../actions'
import { connect } from 'react-redux'

let Body = ({children,dispatch}) => (
  <div className={styles.body}>
    {children}

        <button  onClick={e => {
        // e.preventDefault()
        dispatch(openModal(true)) //用一个 Action 对象来描述我们的行为

      }} style={{cursor:"pointer"}}>
          open modal
        </button>
  </div>
)

Body = connect()(Body)
export default Body