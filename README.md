# 🛍️ E-Cart Frontend

A premium, modern, and responsive e-commerce interface built with **React 18** and **Vite**. This application delivers a seamless shopping experience with real-time updates, smooth animations, and a polished design system.

---

## ✨ Features

### 🎨 User Experience
- **Modern & Responsive Design**: Clean aesthetics with glassmorphism effects and fully responsive layouts for all devices.
- **Dynamic Animations**: Enhanced interactivity using `lottie-react` and `canvas-confetti` for delightful micro-interactions.
- **Toast Notifications**: Real-time feedback for user actions (cart updates, login status, errors) via `react-toastify`.

### 🛒 Shopping Functionality
- **Product Browsing**: Advanced filtering, searching, and categorization of products.
- **Cart Management**: Real-time cart updates, optimistic UI interactions, and smooth checkout flows.
- **Secure Authentication**: JWT-based authentication with protected routes for user and admin dashboards.

### 🛡️ Admin Dashboard
- **Product Management**: Create, update, and delete products with ease.
- **Order Tracking**: View and manage customer orders.
- **User Management**: Administrative controls for user accounts.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/) - Lightning fast development and building.
- **Routing**: [React Router](https://reactrouter.com/) (v7) - Robust client-side routing.
- **Styling**: Vanilla CSS with modern variables, strict design tokens, and modular stylesheets.
- **Icons**: `lucide-react` & `react-icons` for a consistent iconography.
- **HTTP Client**: `axios` for efficient API communication.
- **State Management**: React Context API (Auth & Cart Contexts).

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will launch at `http://localhost:5173` (or the port shown in your terminal).

---

## 📂 Project Structure

```bash
Frontend/
├── public/             # Static assets (images, vectors)
├── src/
│   ├── api/            # Axios configuration and API endpoints
│   ├── assets/         # Project assets
│   ├── components/     # Reusable UI components (Navbar, ProductCard, etc.)
│   ├── context/        # Global state (AuthContext, CartContext)
│   ├── pages/          # Application pages (Home, Login, Admin, etc.)
│   │   ├── admin/      # Admin-specific pages
│   │   ├── public/     # Publicly accessible pages
│   │   └── user/       # Authenticated user pages
│   ├── styles/         # Global and shared CSS files
│   ├── App.jsx         # Main application component & routing
│   └── main.jsx        # Entry point
├── .gitignore          # Git ignore rules
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🤝 Contributing

1. Fork the repository.
2. Create standard branching (e.g., `feature/amazing-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

---

*Built with ❤️ by the E-Cart Team.*
