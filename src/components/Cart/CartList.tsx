import { useState } from 'react';
import { products } from '../../assets/productsMock/products';
import CartItem from './CartItem';

const CartList = () => {
  const [cartItems, setCartItems] = useState(() => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const itemKey = localStorage.key(i);
      const itemValue = localStorage.getItem(`${itemKey}`);
      const foundItem = products.find((product) => `${product.id}` == itemValue);
      if (foundItem) {
        items.push(foundItem);
      }
    }
    return items;
  });

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      {cartItems.length == 0 && <div>Корзина пуста</div>}
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} onRemove={removeFromCart} />
      ))}

      {cartItems[0] && (
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Checkout
        </button>
      )}
    </div>
  );
};

export default CartList;
