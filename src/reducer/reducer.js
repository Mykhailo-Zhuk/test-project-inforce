// const fetchData = () =>
//   fetch('localhost:3000/posts')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

import { PRODUCTS } from '../products';

const initialState = {
  products: [...PRODUCTS],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_PRODUCT': {
      let product = state.products.find((el) => el.id === action.id);
      if (product) {
        return { ...state };
      } else {
        const newProduct = state.products.concat([
          {
            id: action.id,
            productName: action.productName,
            price: action.price,
            productImage: action.productImage,
            amount: action.amount,
          },
        ]);

        return { products: newProduct };
      }
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
