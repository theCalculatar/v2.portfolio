"use client";

import { useReducer } from "react";
import { createContext } from "react";
import { navbarReducerFn } from "./reducer";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [navState, navDispach] = useReducer(navbarReducerFn, {
    isNavOpen: false,
  });

  return (
    <AppContext.Provider
      value={{
        navState,
        navDispach,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, ContextProvider };
