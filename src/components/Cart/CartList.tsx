import { useState } from "react";
import { goods } from "../../assets/goodsMock/goods";
import CartItem from "./CartItem";

const CartList = () => {
  const [cartItems, setCartItems] = useState(() => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const itemKey = localStorage.key(i);
      const itemValue = localStorage.getItem(`${itemKey}`);
      const foundItem = goods.find((good) => `${good.id}` == itemValue);
      if (foundItem) {
        items.push(foundItem);
      }
    }
    return items;
  });
  console.log(cartItems[0])
  const removeFromCart = (id:number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  return (
    <div>
      {cartItems.length == 0 &&  <div>Корзина пуста</div>}
      {cartItems.map((item) => (
        <CartItem key={item.id} onRemove={removeFromCart}>{item}</CartItem>
      ))}
      
      {cartItems[0] && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</button>}
    </div>
  );
};

export default CartList;
