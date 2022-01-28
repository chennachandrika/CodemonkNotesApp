import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: true
  },
  reducers: {
    modeChanged: (theme, action) => {
      theme.isDarkMode = !theme.isDarkMode;
    }
  }
});
export const { modeChanged } = themeSlice.actions;
export default themeSlice.reducer;
