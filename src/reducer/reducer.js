const initialState = {
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS': {
      return { products: [...action.payload] };
    }

    case 'ADD_COMMENTS': {
      return { ...state, comments: [...action.payload] };
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
      const productsCopy = state.products;
      const sortedProducts = productsCopy.sort((a, b) => {
        const nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
      });

      return { ...state, products: sortedProducts };
    }
    case 'SORT_PRODUCT_BY_COUNT': {
      const productsCopy = state.products;
      const sortedProducts = productsCopy.sort((a, b) => a.count - b.count);

      return { ...state, products: sortedProducts };
    }
    case 'DELETE_PRODUCT': {
      const filteredProduct = state.products.filter((el) => el.id !== action.id);
      return { ...state, products: filteredProduct };
    }

    case 'DELETE_COMMENT': {
      const filteredComment = state.comments.filter((el) => el.id !== action.id);
      return { ...state, comments: filteredComment };
    }

    case 'EDITING_PRODUCT': {
      const productsCopy = state.products;
      const indexOfCurrentProduct = productsCopy.findIndex(
        (product) => product.id === action.payload.id,
      );
      productsCopy.splice(indexOfCurrentProduct, 1);
      return { ...state, products: [...state.products, action.payload] };
    }

    default:
      return state;
  }
};
