import React from 'react'

const Cart = ({ cartItems = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={`${item.id}-${index}`}>{item.name} is in your cart.</li>
        ))}
      </ul>
      <p>Total items: {cartItems.length}</p>
    </div>
  )
}

export default Cart
