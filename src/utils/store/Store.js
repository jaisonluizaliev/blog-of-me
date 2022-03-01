// import jsCookie from 'js-cookie';
import jsCookie from 'js-cookie';
import React, { useReducer, createContext } from 'react';

//Step 1 - Create Context
export const Store = createContext();

//optional Step - create initialState
const initialState = {
  userInfo: jsCookie.get('userInfo')
    ? JSON.parse(jsCookie.get('userInfo'))
    : null,
};

//step 2 - create reducer function
function reducer(state, action) {
  switch (action.type) {
    // case 'MENU_DYNAMIC':
    //   return { ...state, contents: action.payload };

    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LOGOUT':
      return { ...state, userInfo: null };
    default:
      state;
  }
}

//step 3 - store provider
function StoreProvider({ children }) {
  //step 4 - create useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  //step 5 - instance of values
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export default StoreProvider;
