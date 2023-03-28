const DecreaseQuantity = (dispatch, cartitem) => {
  dispatch({
    type: "REMOVE_ORDER",
    payload: cartitem,
  });
};

export default DecreaseQuantity;
