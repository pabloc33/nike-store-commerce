import toast from "react-hot-toast";
import {
  cartSlice,
  setAddItemToCar,
  setClearCartItems,
  setCloseCart,
  setDecreaseItemQTY,
  setGetTotals,
  setOpenCart,
  setRemoveItemFromCart,
} from "../../src/app/cartSlice";
import {
  cartDecreaseItemInicialState,
  cartItemInicialState,
  closeCart,
  demoCartItems,
  initialState,
  openCart,
  stateGetTotals,
} from "../fixtures/cartFixtures";

describe("Pruebas en cartSlice", () => {
  test("debe regresar el estado inicial", () => {
    const state = cartSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
    expect(cartSlice.name).toEqual("cart");
  });

  test("should update the cartState correctly when setOpenCart is called", () => {
    const state = cartSlice.reducer(initialState, setOpenCart(openCart));

    expect(state.cartState).toBe(true);
  });

  test("should update the cartState correctly when setCloseCart is called", () => {
    const state = cartSlice.reducer(openCart, setCloseCart(closeCart));

    expect(state.cartState).toBe(false);
  });

  test("should have an empty cartItems array in the initial state", () => {
    const state = initialState.cartItems;

    expect(state).toEqual([]);
  });

  test("should add an item to the cartItems array and update the localStorage when setAddItemToCar is called", () => {
    const state = cartSlice.reducer(
      initialState,
      setAddItemToCar(demoCartItems)
    );

    expect(state.cartItems.length).toBe(1);
    expect(state.cartItems[0].id).toBe("0M0x1");
    expect(state.cartItems[0].title).toBe("Nike Air Low Premium");
  });

  test("should increase the cartQuantity of an existing item when setAddItemToCar is called", () => {
    const state = cartSlice.reducer(
      cartItemInicialState,
      setAddItemToCar(demoCartItems)
    );

    expect(state.cartItems.length).toBe(1);
    expect(state.cartItems[0].id).toBe("0M0x1");
    expect(state.cartItems[0].title).toBe("Nike Air Low Premium");
    expect(state.cartItems[0].cartQuantity).toBe(2);
  });

  test("should remove an item from the cart when given a valid item ID", () => {
    const state = cartSlice.reducer(
      cartItemInicialState,
      setRemoveItemFromCart(demoCartItems)
    );

    expect(state.cartItems).toEqual([]);
  });

  test("should decrease cartQuantity by 1 when it is greater than 1'", () => {
    const state = cartSlice.reducer(
      cartDecreaseItemInicialState,
      setDecreaseItemQTY({ id: "0M0x1" })
    );

    expect(state.cartItems[0].cartQuantity).toBe(1);
  });

  test("Debe dejar el estado de cartItems en vacio y hacer el llamado del toast", () => {
    const toastSpy = jest.spyOn(toast, "success");
    // jest.mock("react-hot-toast", () => ({
    //   toast: {
    //     success: jest.fn(),
    //   },
    // }));

    const state = cartSlice.reducer(cartItemInicialState, setClearCartItems());

    expect(state.cartItems).toEqual([]);
    expect(toastSpy).toHaveBeenCalledWith("Cart Cleared");
  });

  test("should correctly calculate the total amount and quantity of items in the cart", () => {
    const state = cartSlice.reducer(stateGetTotals, setGetTotals());

    expect(state.cartTotalAmount).toBe(10 * 2 + 5 * 3 + 8 * 1);
    expect(state.cartTotalQantity).toBe(2 + 3 + 1);
  });
});
