export const addProductsAction = (data) => {
  const payload = data.sort(function (a, b) {
    const nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return { type: 'ADD_PRODUCTS', payload };
};

export const addCommentsAction = (payload) => {
  return { type: 'ADD_COMMENTS', payload };
};

export const newProductAction = (payload) => {
  return {
    type: 'NEW_PRODUCT',
    payload,
  };
};

export const newCommentAction = (payload) => {
  return {
    type: 'NEW_COMMENT',
    payload,
  };
};

export const editingProductAction = (payload) => {
  return {
    type: 'EDITING_PRODUCT',
    payload,
  };
};

export const deleteProductAction = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    id,
  };
};

export const deleteCommentAction = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id,
  };
};

export const sortProductAlphabeticallyAction = () => {
  return {
    type: 'SORT_PRODUCT_ALPHABETICALLY',
  };
};

export const sortProductByCountAction = () => {
  return {
    type: 'SORT_PRODUCT_BY_COUNT',
  };
};
