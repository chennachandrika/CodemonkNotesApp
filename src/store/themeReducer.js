import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: true
  },
  reducers: {
    changeMode: (theme, action) => {
      theme.isDarkMode = !theme.isDarkMode;
    }
  }
});
export const { changeMode } = themeSlice.actions;
export default themeSlice.reducer;
