import React, { useReducer } from "react";
import { CASE_GET_FOLLOW } from "../components/helpers/Cases";

export const followContext = React.createContext();

const INIT_STATE = {
  follow: {},
  followLength: 0,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_FOLLOW:
      return {
        ...state,
        follow: action.payload,
        followLength: action.payload.products.length,
      };
    default:
      return state;
  }
};

const FollowContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function getFollow() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [] };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    dispatch({
      type: CASE_GET_FOLLOW,
      payload: cart,
    });
  }

  function addProductToFollow(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [] };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInCart = cart.products.some(
      (item) => item.item.id == newProduct.item.id
    );
    if (isProductInCart) {
      cart.products = cart.products.filter(
        (item) => item.item.id != newProduct.item.id
      );
    } else {
      cart.products.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function checkItemInFollow(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [] };
    }
    let isProductInCart = cart.products.some((item) => item.item.id == id);
    return isProductInCart;
  }
  function deleteFromFollow(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }
    cart.products = cart.products.filter((item) => item.item.id != id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getFollow();
  }

  return (
    <followContext.Provider
      value={{
        followLength: state.followLength,
        follow: state.follow,
        getFollow,
        addProductToFollow,
        checkItemInFollow,
        deleteFromFollow,
      }}
    >
      {children}
    </followContext.Provider>
  );
};
export default FollowContextProvider;
