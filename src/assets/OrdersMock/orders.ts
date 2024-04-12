import { Order } from '../../@types/global';

export const orders: Order[] = [
  {
    id: 1,
    startPointId: 1,
    endPointId: 2,
    status: 'closed',
  },
  {
    id: 2,
    startPointId: 2,
    endPointId: 3,
    status: 'arrived',
  },
  {
    id: 3,
    startPointId: 3,
    endPointId: 4,
    status: 'paid',
  },
  {
    id: 4,
    startPointId: 4,
    endPointId: 5,
    status: 'canceled',
  },
];
