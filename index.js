import store from "./redux/store";

store.subscribe(() => console.log(`Redux store changed: ${store.getState()}`));

store.dispatch({
  type: "ADD_CURRENT_TIME",
  payload: "11:20:00",
});
