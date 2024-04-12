import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

export interface CartItem {
  id: number;
  companyId: number;
  quantity: number;
}

interface CartContextValue {
  cart: CartItem[] | undefined;
  setCart: Dispatch<SetStateAction<CartItem[] | undefined>>;
}

const CartContext = createContext<CartContextValue>({} as CartContextValue);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<CartItem[]>();

  useEffect(() => {
    if (cart === undefined) return;
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (cart !== undefined) return;

    try {
      const cartInStorage = JSON.parse(localStorage.getItem('cart') ?? '[]');
      if (!Array.isArray(cartInStorage)) throw new Error();
      setCart(cartInStorage);
    } catch {
      setCart([]);
    }
  }, [cart, setCart]);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};

export default CartContext;
