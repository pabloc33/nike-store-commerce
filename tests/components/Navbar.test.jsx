import { fireEvent, render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";
import Navbar from "../../src/components/Navbar";
import { initialState } from "../fixtures/cartFixtures";
import { cartSlice } from "../../src/app/CartSlice";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  preloadedState: {
    cart: initialState,
  },
});

describe("Pruebas en <Navbar />", () => {
  test("should render a header with a logo and navigation icons", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    // screen.debug();
    const headerElement = screen.getByRole("banner");
    const logoElement = screen.getByAltText("logo/img");
    const searchIconElement = screen.getByTestId("icomagnifyingGlass");

    expect(headerElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
    expect(searchIconElement).toBeInTheDocument();
  });

  test("boton de ShoppingBagIcon debe de llamar el onCartToggle", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );

    // console.log(store.getState());

    //screen.debug();
    const shoppingBagBtn = screen.getByLabelText("shoppingBag-btn");
    fireEvent.click(shoppingBagBtn);

    expect(dispatch).toHaveBeenCalledWith({
      type: "cart/setOpenCart",
      payload: {
        cartState: true,
      },
    });
  });
});
