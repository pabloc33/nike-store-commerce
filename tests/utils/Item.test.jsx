import { render, screen } from "@testing-library/react";
import Item from "../../src/utils/Item";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { cartSlice } from "../../src/app/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

describe("Pruebas en <Item />", () => {
  test("Debe de mostrar el componente correctamente", () => {
    const props = {
      ifExists: true,
      id: 1,
      color: "bg-red-500",
      shadow: "shadow-md",
      title: "Item Title",
      text: "Item Text",
      img: "item-img.jpg",
      btn: "Add to Cart",
      rating: 4.5,
      price: 9.99,
    };

    render(
      <Provider store={store}>
        <Item {...props} />
      </Provider>
    );

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(`$${props.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(`img/item-img/${props.id}`)).toBeInTheDocument();
  });
});
