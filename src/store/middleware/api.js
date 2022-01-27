import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) {
    return next(action);
  }
  const { url, method, data, onBegin, onSuccess, onFailure } = action.payload;
  try {
    if (onBegin) dispatch({ type: onBegin });
    const response = await axios.request({
      url,
      method,
      data,
      onSuccess,
      onFailure
    });
    dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    dispatch(actions.apiCallFailure(error.message));
    dispatch({ type: onFailure });
  }
};

export default api;
