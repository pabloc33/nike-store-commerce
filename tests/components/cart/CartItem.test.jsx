import { fireEvent, render, screen } from "@testing-library/react";
import CartItem from "../../../src/components/cart/CartItem";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../../../src/app/CartSlice";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

describe("Pruebas en <CartItem />", () => {
  test("debe de renderizar correctamente el componente", () => {
    const item = {
      id: 1,
      title: "Test Item",
      text: "Test Description",
      img: "test-image.jpg",
      color: "red",
      shadow: "shadow",
      price: 10,
      cartQuantity: 2,
    };

    render(
      <Provider store={store}>
        <CartItem item={item} />
      </Provider>
    );

    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByAltText("img/cart-item/1")).toBeInTheDocument();
    expect(screen.getByText("$20")).toBeInTheDocument();
  });

  test("should increase the quantity of the item in the cart when the increase button is clicked", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const item = {
      id: 1,
      title: "Test Item",
      text: "Test Description",
      img: "test-image.jpg",
      color: "red",
      shadow: "shadow",
      price: 10,
      cartQuantity: 2,
    };

    render(
      <Provider store={store}>
        <CartItem item={item} />
      </Provider>
    );

    const increaseBtn = screen.getByLabelText("increse-qty");
    fireEvent.click(increaseBtn);

    expect(dispatch).toHaveBeenCalledWith({
      type: "cart/setIncreaseItemQTY",
      payload: {
        id: 1,
        title: "Test Item",
        text: "Test Description",
        img: "test-image.jpg",
        color: "red",
        shadow: "shadow",
        price: 10,
        cartQuantity: 2,
      },
    });
  });
});
