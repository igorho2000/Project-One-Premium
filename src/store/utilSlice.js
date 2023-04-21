import { createSlice } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";

const initialState = {
  animation: {
    inProgress: false,
    endAnimation: false,
  },
  darkmode: false,
  langEn: true,
};

export const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    toggleTransition: (state) => {
      state.animation.inProgress = state.animation.inProgress ? false : true;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    toggleEndAnimation: (state) => {
      state.animation.endAnimation = state.animation.endAnimation
        ? false
        : true;
    },
    toggleLanguage: (state) => {
      state.langEn = state.langEn ? false : true;
    },
    defineLanguage: (state, action) => {
      action.payload === "en" ? (state.langEn = true) : (state.langEn = false);
    },
  },
});

export const {
  toggleTransition,
  toggleEndAnimation,
  toggleLanguage,
  defineLanguage,
} = utilSlice.actions;

export const selectAnimation = (state) => state.util.animation;
export const selectDarkmode = (state) => state.util.darkmode;
export const selectLangEn = (state) => state.util.langEn;

export default utilSlice.reducer;
