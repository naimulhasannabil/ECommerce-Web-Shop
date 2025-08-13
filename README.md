# 🪑 Furniro - Premium Furniture E-Commerce Store

A modern, responsive furniture e-commerce website built with React, Tailwind CSS, and Vite. Furniro offers an elegant shopping experience for premium furniture with advanced filtering, wishlist functionality, and a complete user management system.

![Furniro Preview](https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200)

## ✨ Features

### 🛍️ **E-Commerce Core**
- **Product Catalog** - Browse furniture by categories (Dining, Living, Bedroom)
- **Advanced Search** - Real-time product search with instant results
- **Smart Filtering** - Filter by price range, category, and special features
- **Product Sorting** - Sort by price, name, rating, or default order
- **Shopping Cart** - Add, remove, and manage quantities with persistent storage
- **Wishlist System** - Save favorite products for later purchase

### 🎨 **User Experience**
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Product Cards** - Hover effects with quick action buttons
- **Product Detail Modal** - Detailed product information with image gallery
- **Smooth Animations** - Micro-interactions and transitions throughout
- **Loading States** - Professional loading indicators and empty states

### 👤 **User Management**
- **Authentication System** - Login and registration with form validation
- **User Profiles** - Personalized experience with user greeting
- **Social Login Ready** - UI prepared for Google and Facebook integration
- **Guest Shopping** - Full shopping experience without required registration

### 📱 **Navigation & Pages**
- **Home Page** - Hero section with featured products and categories
- **Shop Page** - Complete product catalog with advanced filtering
- **About Page** - Company story, values, team, and statistics
- **Contact Page** - Contact form, business info, and social media links
- **Wishlist Page** - Manage saved products with easy access

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **State Management:** React Context API
- **Icons:** Heroicons (via Tailwind)
- **Fonts:** Google Fonts (Poppins, Playfair Display)
- **Image Optimization:** Pexels API integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce.git
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
ecommerce/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AboutPage.jsx
│   │   ├── Cart.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ContactPage.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LoginModal.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductModal.jsx
│   │   ├── ShopPage.jsx
│   │   └── WishlistPage.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary:** Golden Brown (#B88E2F)
- **Secondary:** Gray Tones (#3A3A3A to #F4F5F7)
- **Accent:** Green (#22c55e)
- **Background:** Cream (#F9F1E7)
- **Success:** #22c55e
- **Warning:** #f59e0b
- **Error:** #ef4444

### Typography
- **Headings:** Playfair Display (Serif)
- **Body Text:** Poppins (Sans-serif)
- **Font Weights:** 300, 400, 500, 600, 700

### Components
- **Cards:** Subtle shadows with hover animations
- **Buttons:** Primary, secondary, and outline variants
- **Forms:** Clean inputs with focus states
- **Navigation:** Sticky header with mobile-responsive menu

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Extended color palette for brand consistency
- Custom font families
- Additional spacing and animation utilities
- Responsive breakpoints

### Vite Configuration
Optimized for:
- Fast development server
- Hot module replacement
- Optimized production builds
- React plugin integration

## 📊 Features Breakdown

### Shopping Cart
- Add/remove products
- Quantity management
- Price calculations with tax
- Persistent cart state
- Slide-out cart sidebar

### Product Management
- Category-based filtering
- Price range filtering
- Search functionality
- Product comparison (up to 3 items)
- Wishlist management

### User Interface
- Mobile-first responsive design
- Smooth page transitions
- Interactive hover states
- Loading and empty states
- Form validation

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure server for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 🔮 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] User account dashboard
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Advanced search with filters
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA) features
- [ ] Real-time inventory management
- [ ] Email notifications

---

**⭐ If you found this project helpful, please give it a star!**

Made with ❤️ and React
