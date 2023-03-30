import { comments, products } from '../products';

const initialState = { products: [...products], comments: [...comments] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS': {
      return { products: [...action.payload] };
    }
    case 'NEW_PRODUCT': {
      let product = state.products.find((product) => product.id === action.id);
      if (product) {
        return { ...state };
      } else {
        return { ...state, products: [...state.products, action.payload] };
      }
    }

    case 'NEW_COMMENT': {
      return { ...state, comments: [...state.comments, action.payload] };
    }

    case 'SORT_PRODUCT_ALPHABETICALLY': {
      console.log(action);
      const stateCopy = state;
      const data = stateCopy.products.sort(function (a, b) {
        if (a.productName < b.productName) {
          return -1;
        }
        if (a.productName > b.productName) {
          return 1;
        }
        return 0;
      });
      return { ...data };
    }
    case 'SORT_PRODUCT_BY_COUNT': {
      const stateCopy = state;
      const data = stateCopy.products.sort(function (a, b) {
        return a.id - b.id;
      });
      return { ...data };
    }
    case 'DELETE_PRODUCT': {
      const filteredProducts = state.products.filter((el) => el.id !== action.id);
      return { products: filteredProducts };
    }

    default:
      return state;
  }
};
