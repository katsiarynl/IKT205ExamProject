const IncreaseQuantity = (dispatch, cartitem) => {
  dispatch({
    type: "PLACE_ORDER",
    payload: cartitem,
  });
};

export default IncreaseQuantity;
