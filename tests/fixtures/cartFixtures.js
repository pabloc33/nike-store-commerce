export const initialState = {
  cartState: false,
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

export const openCart = {
  cartState: true,
};

export const closeCart = {
  cartState: false,
};

export const demoCartItems = {
  id: "0M0x1",
  title: "Nike Air Low Premium",
  text: "MEN Running Shoes",
  rating: "5+",
  btn: "Buy Now",
  img: "product7",
  price: "150",
  color: "from-sky-600 to-indigo-600",
  shadow: "shadow-lg shadow-blue-500",
};

export const cartItemInicialState = {
  cartState: false,
  cartItems: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: "product7",
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
      cartQuantity: 1,
    },
  ],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

export const cartDecreaseItemInicialState = {
  cartState: false,
  cartItems: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "MEN Running Shoes",
      rating: "5+",
      btn: "Buy Now",
      img: "product7",
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
      cartQuantity: 2,
    },
  ],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};

export const stateGetTotals = {
  cartItems: [
    { price: 10, cartQuantity: 2 },
    { price: 5, cartQuantity: 3 },
    { price: 8, cartQuantity: 1 },
  ],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
};
