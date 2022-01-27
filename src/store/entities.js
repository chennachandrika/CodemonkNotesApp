import { combineReducers } from "@reduxjs/toolkit";
import notes from "./notesReducer";
import theme from "./themeReducer";

export default combineReducers({
  notes: notes,
  theme: theme
});
