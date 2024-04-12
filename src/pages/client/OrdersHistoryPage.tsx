import OrdersHistoryItem from '../../components/OrdersHistory/OrdersHistoryItem';

const OrdersHistoryPage = () => {
  return (
    <main className="flex size-full flex-col gap-4 overflow-y-scroll pl-[12%] pr-[calc(12%-0.5rem)]">
      <OrdersHistoryItem />
    </main>
  );
};

export default OrdersHistoryPage;
