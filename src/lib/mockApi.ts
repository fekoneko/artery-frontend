import { Client, Company } from '../@types/global';

export const getUserProfile = async (): Promise<{ user: Client | Company }> => {
  return new Promise((resolve) =>
    resolve({
      user: {
        who: 'client',
        surname: 'Auditorre',
        name: 'Ezio',
        patronymic: 'Da Firence',
        phone: 999999999,
        email: 'ezio@example.com',
        password: 'strong-password',
        city: 6,
      },
    }),
  );
};
