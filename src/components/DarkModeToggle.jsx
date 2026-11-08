import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    // The label reflects the action the user can take next.
    <button className={styles.toggle} onClick={onToggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
