import { getCurrentTime } from "../utils/getCurrentTime";
export function addCurrentTime() {
  return {
    type: "ADD_CURRENT_TIME",
    payload: getCurrentTime(),
  };
}

export function clearAllTimes() {
  return {
    type: "CLEAR_ALL_TIMES",
  };
}
