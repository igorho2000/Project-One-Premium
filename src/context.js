import React from "react";

export const TransitionContext = React.createContext({
    inProgress: false,
    toggleTransition: () => {}
  });