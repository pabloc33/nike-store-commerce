import { fireEvent, render, screen } from "@testing-library/react";
import CartCount from "../../../src/components/cart/CartCount";

describe("Pruebas en <CartCount />", () => {
  test("debe de renderizar correctamente el componente", () => {
    const totalQTY = 5;

    render(<CartCount totalQTY={totalQTY} />);

    expect(screen.getByText("(5 Items)")).toBeInTheDocument();

    const clearCartBtn = screen.getByLabelText("clear-cart");
    expect(clearCartBtn).toBeInTheDocument();
  });

  test("should expand/collapse the cart when clicking on the toggle button", () => {
    const totalQTY = 5;
    const onCartToggle = jest.fn();
    const onClearCartItems = jest.fn();

    render(
      <CartCount
        totalQTY={totalQTY}
        onCartToggle={onCartToggle}
        onClearCartItems={onClearCartItems}
      />
    );

    const toggleClick = screen.getByTestId("toggleCart");
    fireEvent.click(toggleClick);
    expect(onCartToggle).toHaveBeenCalledTimes(1);
  });
});
