import { Product } from '../../@types/global';

interface CartItemViewProps {
  product: Product;
  quantity: number;
  setQuantity: (newQuantity: number) => void;
  onRemove: () => void;
}
const CartItemView = ({ product, quantity, setQuantity, onRemove }: CartItemViewProps) => {
  const { image, name, price } = product;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-300 py-4">
      <div className="w-20 shrink-0">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="max-w-24 text-xl font-semibold">{name}</div>
      <div className="flex items-center">
        <button className="text-gray-500 hover:text-gray-900" onClick={decreaseQuantity}>
          -
        </button>
        <span className="mx-2">{quantity}</span>
        <button className="text-gray-500 hover:text-gray-900" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <div className="text-xl font-semibold">Total: {(price * quantity).toFixed(2)} RUB</div>
      <button className="text-red-500 hover:text-red-700" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default CartItemView;
