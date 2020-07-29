import React, { createContext, useReducer, useContext } from "react";

export const initialState = {
  basket: [],
  user: null
};

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {...state,
      user: action.payload}

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.payload
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`Cannot remove item id ${action.payload}`);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;


export const getTotal = (basket) => basket.reduce((amount, item)=> amount + item.price, 0)
