const empty_cart = (dispatch) => {
  dispatch(
    (() => {
      return { type: "REMOVE_ITEMS" };
    })()
  );
};
export default empty_cart;
