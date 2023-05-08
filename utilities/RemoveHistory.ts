function RemoveHisotry(dispatch) {
  dispatch(
    (() => {
      return { type: "REMOVE", payload: [] };
    })()
  );
}

export default RemoveHisotry;
