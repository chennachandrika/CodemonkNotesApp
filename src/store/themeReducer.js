import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: true
  },
  reducers: {
    changeToLightMode: (theme, action) => {
      theme.isDarkMode = false;
    },
    changeToDarkMode: (theme, action) => {
      theme.isDarkMode = true;
    }
  }
});
export const { changeToLightMode, changeToDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
