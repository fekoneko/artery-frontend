import { useContext } from 'react';
import CartItemView from './CartItemView';
import CartContext from '../../contexts/CartContext';
import { products } from '../../assets/productsMock/products';

const CartList = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (id: number) => {
    setCart((prev) => prev?.filter((item) => item.id !== id));
  };

  const setQuantity = (id: number, newQuantity: number) =>
    setCart((prev) =>
      prev?.map((item) => {
        if (item.id === id) return { id, quantity: newQuantity };
        else return item;
      }),
    );

  return (
    <div>
      {cart?.length ? (
        <>
          {cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            if (!product) return null;

            return (
              <CartItemView
                key={item.id}
                product={product}
                quantity={item.quantity}
                setQuantity={(newQuantity) => setQuantity(item.id, newQuantity)}
                onRemove={() => removeFromCart(item.id)}
              />
            );
          })}
          <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Checkout
          </button>
        </>
      ) : (
        <h2>Корзина пуста</h2>
      )}
    </div>
  );
};

export default CartList;
