// reducer.js
const initialState = {
    likedProducts: []
};

const handleLike = (state = initialState, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        likedProducts: [...state.likedProducts, action.payload] // Include entire product object
      };
    case "UNLIKE":
      return {
        ...state,
        likedProducts: state.likedProducts.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
};
export default handleLike;