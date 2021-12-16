import React, {
  createContext,
  Reducer,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { LineItem } from '@chec/commerce.js/types/line-item';
import commerce from '../config/commerce';

const SET_CART = 'SET_CART';
const RESET = 'RESET';

type IAction =
  | { type: typeof SET_CART; payload?: any }
  | { type: typeof RESET };

export type Subtotal = {
  formatted: string;
  formatted_with_code: string;
  formatted_with_symbol: string;
  raw: number;
};
interface ICartInitialState {
  subtotal: Subtotal;
  total_items: number;
  total_unique_items: number;
  line_items: LineItem[];
}

const initialState: ICartInitialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
  subtotal: {
    formatted: '',
    formatted_with_code: '',
    formatted_with_symbol: '',
    raw: 0,
  },
};

const initialDispacth = {
  // eslint-disable-next-line no-unused-vars
  setCart: (payload: any) => {},
  resetCart: () => {},
};

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

  const memoState = useMemo(() => ({ ...state }), [state]);
  const memoDispatch = useMemo(() => ({ setCart, resetCart }), []);

  return (
    <CartDispatchContext.Provider value={memoDispatch}>
      <CartStateContext.Provider value={memoState}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartStateContext = () => useContext(CartStateContext);
export const useCartDispatchContext = () => useContext(CartDispatchContext);

export default CartProvider;
