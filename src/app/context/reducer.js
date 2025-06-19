import { NAVOPEN } from "./action";

const navbarReducerFn = (state, action) => {
  switch (action) {
    case NAVOPEN:
      return { ...state, isNavOpen: !state.isNavOpen };

    default:
      return { ...state, isNavOpen: !state.isNavOpen };
  }
};

export { navbarReducerFn };
