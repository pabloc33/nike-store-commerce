import { render, screen } from "@testing-library/react";
import Sales from "../../src/components/Sales";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { cartSlice } from "../../src/app/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

describe("Pruebas en <Sales />", () => {
  test("Debe de renderizar correctamente el componente", () => {
    const title = "Test Title";
    render(<Sales endpoint={{ title }} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("should display all items passed as props", () => {
    const items = [
      { id: 1, title: "Item 1" },
      { id: 2, title: "Item 2" },
      { id: 3, title: "Item 3" },
    ];

    render(
      <Provider store={store}>
        <Sales endpoint={{ items }} />
      </Provider>
    );

    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
