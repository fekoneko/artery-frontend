import { Order } from "../../@types/global";

export const orders: Order[] = [
    {
        id: 1,
        city_start: 'Moscow',
        city_end: 'London',
        statuses: 'CLOSED'
    },
    {
        id: 2,
        city_start: 'Bryansk',
        city_end: 'Obninsk',
        statuses: 'ARRIVED'
    },
    {
        id: 3,
        city_start: 'Moscow',
        city_end: 'Bebe_baba',
        statuses: 'PAYED'
    },
    {
        id: 4,
        city_start: 'Shir',
        city_end: 'Mordor',
        statuses: 'CANCELED'
    }
]