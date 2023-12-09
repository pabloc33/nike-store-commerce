import { render, screen } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Cart from "../../src/components/Cart";
import { cartSlice } from "../../src/app/CartSlice";

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(),
// }));

describe("Pruebas en <Cart />", () => {
  test("should render CartEmpty component if cartItems is empty", () => {
    const store = configureStore({
      reducer: {
        cart: cartSlice.reducer,
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText("Back To Nike Store")).toBeInTheDocument();
  });

  test("should render CartItem component for each item in cartItems", () => {
    // useSelector.mockReturnValue({

    // });

    // console.log(cartItems);

    const store = configureStore({
      reducer: {
        cart: cartSlice.reducer,
      },
      preloadedState: {
        cart: {
          cartItems: [
            {
              id: 1,
              title: "Item 1",
              text: "Description 1",
              img: "image1.jpg",
              color: "red",
              shadow: "shadow1",
              price: 10,
              cartQuantity: 2,
            },
            {
              id: 2,
              title: "Item 2",
              text: "Description 2",
              img: "image2.jpg",
              color: "blue",
              shadow: "shadow2",
              price: 20,
              cartQuantity: 1,
            },
          ],
        },
      },
    });

    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("(3 Items)")).toBeInTheDocument();
  });
});
