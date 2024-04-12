import CartList from '../../components/Cart/CartList';

const CartPage = () => {
  return (
    <main className="size-full overflow-y-scroll pl-[12%] pr-[calc(12%-0.5rem)]">
      <div className="py-2">CartPage</div>
      <CartList />
    </main>
  );
};
export default CartPage;
