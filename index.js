import { addCurrentTime, clearAllTimes } from "./redux/actionCreators";
import store from "./redux/store";

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  store.dispatch(addCurrentTime());
});

const clear = document.querySelector("#clear");
btn.addEventListener("click", () => {
  store.dispatch(clearAllTimes());
});

const list = document.querySelector("#timesList");
store.subscribe(() => {
  list.innerHTML = "";
  store.getState().forEach((time) => {
    const li = document.createElement("li");
    li.innerHTML = time;
    list.appendChild(li);
  });
});
