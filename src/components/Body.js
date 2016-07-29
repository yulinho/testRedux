import React from 'react'
import FilterLink from '../containers/FilterLink'
import styles from './Body.css'
import { openModal } from '../actions'
import { connect } from 'react-redux'

let Body = ({children,dispatch}) => (
  <div className={styles.body}>
    {children}
  </div>
)

Body = connect()(Body)
export default Body