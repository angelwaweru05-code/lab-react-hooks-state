import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  // App owns the shared UI state so child components stay presentational.
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [category, setCategory] = useState('all')

  // Flip the current theme using the previous value to avoid stale state.
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  // Append to the cart without mutating the existing array.
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product])
  }

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : styles.light}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      {/* Controlled select: React state is the single source of truth. */}
      <div className={styles.filter}>
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList category={category} addToCart={addToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
