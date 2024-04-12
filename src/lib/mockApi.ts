import { Client, Company } from '../@types/global';

export const getUserProfile = async (): Promise<Client | Company> => {
  return new Promise((resolve) =>
    resolve({
      who: 'client',
      surname: 'Auditorre',
      name: 'Ezio',
      patronymic: 'Da Firence',
      phone: '999999999',
      email: 'ezio@example.com',
      password: 'strong-password',
      city: 6,
    }),

    // resolve({
    //   who: 'company',
    //   name: 'Ezio',
    //   phone: '999999999',
    //   email: 'ezio@example.com',
    //   password: 'strong-password',
    //   description:
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat debitis fugiat vel nostrum accusamus iure qui doloribus at consequuntur, veritatis atque ipsa sed voluptas. Doloribus illum nemo dolorum excepturi?',
    // }),
  );
};
