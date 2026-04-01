# Paradise Nursery Plant Shop

A responsive e-commerce plant shop built with React, Vite, and Redux Toolkit.
This project allows users to browse plants, add items to a shopping cart, update quantities, and manage purchases through a clean responsive interface.

---

## Features

* Responsive desktop-first layout
* Product cards with images, prices, and sale badges
* Add products to cart
* Increase / decrease product quantity
* Remove products from cart
* Cart total calculation
* Redux Toolkit state management
* Navigation between home and product pages

---

## Technologies Used

* React
* Vite
* Redux Toolkit
* CSS3
* JavaScript (ES6)

---

## Project Structure

src/
├── App.jsx
├── ProductList.jsx
├── CartItem.jsx
├── CartSlice.js
├── ProductList.css
├── CartItem.css

---

## Installation

1. Clone the repository

```bash
git clone <your-repository-url>
```

2. Navigate into the project folder

```bash
cd your-project-folder
```

3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```

---

## Redux Functionality

The cart uses Redux Toolkit to manage:

* Adding items
* Removing items
* Updating quantity
* Tracking total cart count

Main Redux actions:

* addItem()
* removeItem()
* updateQuantity()

---

## Responsive Design

The project is built desktop-first and adapts for:

* Large desktops
* Tablets
* Mobile devices

Media queries adjust:

* Product card layout
* Navbar structure
* Cart positioning

---

## Future Improvements

* Checkout page
* Product filtering by category
* Search functionality
* Persistent cart with local storage
* Backend integration

---

## Author

Created by Nigel Bowie
