import React from 'react'

const Cart = ({ cartItems = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {/* Include the index so duplicate products still get unique keys. */}
        {cartItems.map((item, index) => (
          <li key={`${item.id}-${index}`}>{item.name} is in your cart.</li>
        ))}
      </ul>
      {/* The array length doubles as the running cart total. */}
      <p>Total items: {cartItems.length}</p>
    </div>
  )
}

export default Cart
