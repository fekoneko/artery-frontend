import { useContext } from 'react';
import ActionButton from '../common/ActionButton';
import CartContext from '../../contexts/CartContext';

interface AddToCartButtonProps {
  productId: number;
}
const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { setCart } = useContext(CartContext);

  const addToCard = () => {
    setCart((prev) => {
      if (!prev) return undefined;
      if (prev.findIndex((item) => item.id === productId) !== -1) return prev;
      return [...prev, { id: productId, quantity: 1 }];
    });
  };

  return <ActionButton onClick={addToCard}>В корзину</ActionButton>;
};
export default AddToCartButton;
