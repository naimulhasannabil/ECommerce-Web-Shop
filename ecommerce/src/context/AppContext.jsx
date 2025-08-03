import React, { createContext, useContext, useReducer} from "react";
import { products } from '../data/products';

const AppContext = createContext();

const initialState = {
  products: products,
  filteredProducts: products,
  selectedCategory: 'All',
  searchQuery: '',
  cart: [],
  isCartOpen: false,
  selectedProduct: null,
  isProductModalOpen: false,
  currentPage: 'home',
  wishlist: [],
  compareList: [],
  user: null,
  isLoginModalOpen: false,
  sortBy: 'default',
  priceRange: [0, 20000000],
  showFilters: false,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_CATEGORY':
      const filtered = action.payload === 'All' 
        ? state.products 
        : state.products.filter(product => product.category === action.payload);
      return {
        ...state,
        selectedCategory: action.payload,
        filteredProducts: filtered,
      };

    case 'SET_SEARCH_QUERY':
      const searchFiltered = state.products.filter(product =>
        product.name.toLowerCase().includes(action.payload.toLowerCase()) ||
        product.category.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        searchQuery: action.payload,
        filteredProducts: action.payload ? searchFiltered : 
          (state.selectedCategory === 'All' ? state.products : 
           state.products.filter(product => product.category === state.selectedCategory)),
      };

    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };

    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case 'OPEN_PRODUCT_MODAL':
      return {
        ...state,
        selectedProduct: action.payload,
        isProductModalOpen: true,
      };

    case 'CLOSE_PRODUCT_MODAL':
      return {
        ...state,
        selectedProduct: null,
        isProductModalOpen: false,
      };

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };

    case 'ADD_TO_WISHLIST':
      const existingWishItem = state.wishlist.find(item => item.id === action.payload.id);
      if (existingWishItem) {
        return {
          ...state,
          wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case 'ADD_TO_COMPARE':
      const existingCompareItem = state.compareList.find(item => item.id === action.payload.id);
      if (existingCompareItem || state.compareList.length >= 3) {
        return state;
      }
      return {
        ...state,
        compareList: [...state.compareList, action.payload],
      };

    case 'REMOVE_FROM_COMPARE':
      return {
        ...state,
        compareList: state.compareList.filter(item => item.id !== action.payload),
      };

    case 'TOGGLE_LOGIN_MODAL':
      return {
        ...state,
        isLoginModalOpen: !state.isLoginModalOpen,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLoginModalOpen: false,
      };

    case 'SET_SORT':
      let sortedProducts = [...state.filteredProducts];
      switch (action.payload) {
        case 'price-low':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'name':
          sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'rating':
          sortedProducts.sort((a, b) => b.rating - a.rating);
          break;
        default:
          sortedProducts = state.products.filter(product => 
            state.selectedCategory === 'All' || product.category === state.selectedCategory
          );
      }
      return {
        ...state,
        sortBy: action.payload,
        filteredProducts: sortedProducts,
      };

    case 'SET_PRICE_RANGE':
      const priceFiltered = state.products.filter(product => 
        product.price >= action.payload[0] && 
        product.price <= action.payload[1] &&
        (state.selectedCategory === 'All' || product.category === state.selectedCategory)
      );
      return {
        ...state,
        priceRange: action.payload,
        filteredProducts: priceFiltered,
      };

    case 'TOGGLE_FILTERS':
      return {
        ...state,
        showFilters: !state.showFilters,
      };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = {
    ...state,
    dispatch,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}