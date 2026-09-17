# 🛒 Project Assignment: ShopEase (Mini Store & Admin Panel)

Welcome to your comprehensive React assignment! The objective of this project is to apply all fundamental and modern React concepts you have learned so far by building a fully functional, multi-page web application.

---

## 📌 Project Overview

You are required to build **ShopEase**, an interactive e-commerce store with an integrated Admin Panel for adding products. The application must feature dynamic routing, robust form validation, global state management, and an exceptional responsive UI.

---

## 🛠️ Required Tech Stack

- **Core Framework:** React (Vite recommended)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM (v6+)
- **Form & Validation:** React Hook Form + Zod
- **Icons & Alerts:** Lucide React / React Icons, React Hot Toast (or Sonner)
- **State Management:** React Context API or Zustand
- **Mock API:** [DummyJSON Products](https://dummyjson.com/products) or [FakeStore API](https://fakestoreapi.com/products)

---

## 🚀 Core Feature Requirements

### 1. Navigation & Routing
- `/` — **Home Page:** Hero banner, popular categories preview, and featured products.
- `/products` — **Products Catalogue:** Search input, category dropdown filters, sorting (price: low to high, high to low), and product grid.
- `/products/:id` — **Product Details Page:** Dynamic route showing image gallery, title, full description, price, rating, and "Add to Cart" button.
- `/cart` — **Shopping Cart:** List of selected items, quantity increments/decrements, item removal, price calculation, and order summary.
- `/admin/add-product` — **Admin Panel:** A validated form to introduce new products to the store.

### 2. Form Handling & Zod Validation (`/admin/add-product`)
Build a form using **React Hook Form** paired with a **Zod** schema validating the following criteria:
- **Product Title:** Required, minimum 5 characters.
- **Price:** Required, positive numeric value greater than zero.
- **Category:** Required selection from a predefined dropdown list.
- **Image URL:** Required, must be a syntactically valid URL.
- **Description:** Required, minimum 20 characters.

*Requirement: Display user-friendly inline error messages under each field when validation fails. Newly added products must be appended to the catalogue and persist in `localStorage`.*

### 3. Cart & Global State Management
- Users must be able to add products to the cart from the catalogue or product detail views.
- Global cart state must persist using `localStorage` (cart items must remain intact after a page refresh).
- The Navbar must display a badge indicating the dynamic count of total items in the cart.
- Inside the cart:
  - Increment/decrement item quantity.
  - Remove items individually.
  - View calculated Subtotal, Tax/Shipping (mock), and Grand Total.
  - Display an "Empty Cart" UI with a redirect button if no items exist.

### 4. API Handling & User Experience
- Handle API request lifecycles explicitly: display a **Skeleton loader** or **Spinner** during fetch events, and render a dedicated error card if an API call fails.
- Include feedback toasts (e.g., "Product added to cart!", "Product created successfully!").

---

## 🌟 Bonus Challenges (Optional)

1. **Dark Mode:** Implement a dark/light mode toggle that persists across page refreshes.
2. **Debounced Search:** Delay API or client-side filtering by 300ms using a debounce utility on the search input.
3. **Pagination or Infinite Scroll:** Paginate the products catalogue or fetch data lazily.

---

## 📂 Recommended Folder Structure

```text
src/
├── assets/          # Static assets (images, logos)
├── components/      # Reusable UI (Navbar, Footer, ProductCard, Loader)
├── context/         # Context providers (CartContext, ThemeContext)
├── pages/           # Route views (Home, Products, ProductDetails, Cart, AddProduct)
├── schemas/         # Zod schemas (productSchema.js)
├── hooks/           # Custom hooks (e.g., useCart, useDebounce)
├── App.jsx
└── main.jsx