# Lab: Building a Dynamic Shopping App with React Hooks

## Introduction

Your company is developing a **new grocery shopping app** to improve the shopping experience for customers. You have been assigned to implement **three key features**:

1. **Dark Mode Toggle** – Users can switch between light and dark mode.
2. **Add to Cart** – Users can add items to the shopping cart.
3. **Category Filtering** – Users can filter products by category.

Your task is to implement these features using **React Hooks (`useState`)** while ensuring the app is functional and visually consistent.

## Project Description

A React product dashboard that demonstrates state management with `useState`. It includes a dark mode toggle, category filtering, an add-to-cart flow, and a running cart total. The UI is built with Vite, CSS Modules, and Material UI, and is covered by a Jest + React Testing Library suite.

## Setup Instructions

1. Clone the repository and enter the project directory:
   ```sh
   git clone <your-forked-repository-url>
   cd react-hooks-state-lab
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the local URL printed by Vite in your browser.

## Running the Tests

Run the Jest suite with:

```sh
npm test
```

The tests cover the dark mode toggle, category filtering, the empty-product state, and adding items to the cart.

---

## **Challenge**
1. Implement a **dark mode toggle**.
2. Allow users to **add items** from a shopping cart.
3. Implement **category-based filtering** for the shopping list.

## **Bonus Challenge**
4. Display a **cart total** showing the number of items added.

---

## **Instructions**

### **1️⃣ Fork and Clone the Repository**
1. **Fork** the provided GitHub repository.
2. **Clone** the forked repository to your local machine:
   ```sh
   git clone <your-forked-repository-url>
   cd react-hooks-state-lab
   ```
3. Open the project in **VSCode**.
4. Install dependencies:
   ```sh
   npm install
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

### **2️⃣ Implement the Dark Mode Toggle**
- Implement a **button** that toggles between light and dark mode.
- The text of the toggle button should change dynamically.
   - Feel free to also play with styling! However, you'll only be tested on the text of the dark mode toggle button.
- Use the **useState hook** to manage the current theme.

### **3️⃣ Implement the Add to Cart Feature**
- Each product should have an **"Add to Cart"** button.
- Clicking the button should add the item to the cart.
- The cart should display a **list of added items** with the text 'Item is in your cart' such as 'Milk is in your cart.'

### **4️⃣ Implement the Category Filter**
- Create a **dropdown menu** to filter products by category.
- When a user selects a category, **only matching products** should be displayed.
- Use **state management (`useState`)** to track the selected category.

---

## **Bonus Challenge: Cart Total**
- Display a **cart total** showing how many items have been added.
- The total should update dynamically when items are added.

---

## **Testing and Debugging**
1. Run the test suite:
   ```sh
   npm test
   ```
2. Debug any failing tests:
   - Use **browser developer tools** (`F12 → Console`).
   - Verify that product cards display correctly.
   - Ensure filtering and cart updates work as expected.

---

## **Version Control**
1. Initialize a Git repository:
   ```sh
   git init
   ```
2. Regularly commit your changes:
   ```sh
   git add .
   git commit -m "Initial shopping app setup"
   ```
3. Push to GitHub:
   ```sh
   git push origin main
   ```

---

### **✅ Submission**
- Submit your project as a **GitHub repository** to CodeGrade.

---

## **Resources**
- [React Docs: useState](https://react.dev/reference/react/useState)
- [Material UI Documentation](https://mui.com)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Jest Testing Framework](https://jestjs.io/)
- [React Testing Library](https://testing-library.com)

---

## **Implementation Summary**

### Project Goals
- Let shoppers switch between light and dark themes.
- Let shoppers add any product to a cart and see the running total.
- Let shoppers narrow the product list to a single category.

### Implemented Features
- **Dark mode** — `App` owns the `darkMode` boolean; `DarkModeToggle` flips it through an `onClick` handler and swaps its label between "Toggle Dark Mode" and "Toggle Light Mode". Theme colors are applied with `src/styles/DarkMode.module.css`.
- **Category filter** — `App` owns the `category` string, bound to the dropdown through `value`/`onChange`. `ProductList` filters `sampleProducts` and shows "No products available" when nothing matches.
- **Add to cart** — `App` owns the `cartItems` array. `ProductCard` calls the `addToCart` callback, and `Cart` lists each item as `ITEM.NAME is in your cart.`
- **Cart total (bonus)** — `Cart` displays `Total items: <count>`.

### Component Responsibilities
| File | Responsibility |
| --- | --- |
| `src/App.jsx` | Owns `darkMode`, `cartItems`, and `category` state; wires callbacks to children. |
| `src/components/DarkModeToggle.jsx` | Renders the theme toggle button. |
| `src/components/ProductList.jsx` | Holds sample data and filters products by category. |
| `src/components/ProductCard.jsx` | Displays a product and its "Add to Cart" button. |
| `src/components/Cart.jsx` | Lists cart items and the item total. |

### Running and Testing
```sh
npm install
npm run dev      # start the Vite dev server
npm test         # run the Jest suite
npm run build    # production build
```

### Maintenance Notes
- State stays in `App`; child components remain presentational and receive props.
- To add categories, extend `sampleProducts` and add a matching `<option>` in `App`.
- Keep `jest` and `jest-environment-jsdom` on the same major version when updating test tooling.