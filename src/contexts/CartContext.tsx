import React, {
  createContext,
  Reducer,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { Product } from 'chec__commerce.js/types/product';
import { LineItem } from '@chec/commerce.js/types/line-item';
import commerce from '../config/commerce';

const SET_CART = 'SET_CART';
const RESET = 'RESET';

type IAction =
  | { type: typeof SET_CART; payload?: any }
  | { type: typeof RESET };

interface ICartInitialState {
  total_items: number;
  total_unique_items: number;
  line_items: LineItem[];
}

const initialState: ICartInitialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
};

const initialDispacth = { setCart(cart: any) {}, resetCart() {} };

const CartStateContext = createContext(initialState);
const CartDispatchContext = createContext(initialDispacth);

const reducer: Reducer<ICartInitialState, IAction> = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload };

    case RESET:
      return initialState;

    default:
      throw new Error(`Unknown action: ${action}`);
  }
};

const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();

      dispatch({ type: SET_CART, payload: cart });
    } catch (err) {
      // noop
    }
  };

  const setCart = async (payload: any) => dispatch({ type: SET_CART, payload });
  const resetCart = async () => dispatch({ type: RESET });

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartDispatchContext.Provider value={{ setCart, resetCart }}>
      <CartStateContext.Provider value={{ ...state }}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartStateContext = () => useContext(CartStateContext);
export const useCartDispatchContext = () => useContext(CartDispatchContext);

export default CartProvider;
