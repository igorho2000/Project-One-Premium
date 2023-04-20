import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  animation: {
    inProgress: false,
    endAnimation: false,
  },
  darkmode: false,
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
      setTimeout(function () {
        state.animation.endAnimation = state.animation.endAnimation
          ? false
          : true;
      }, 3500);
    },
  },
});

export const { toggleTransition, toggleEndAnimation } = utilSlice.actions;

export const selectAnimation = (state) => state.util.animation;
export const selectDarkmode = (state) => state.util.darkmode;

export default utilSlice.reducer;
