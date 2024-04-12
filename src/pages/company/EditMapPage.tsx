import CompanyMap from '../../components/Map/CompanyMap';
import CompanyRoadsList from '../../components/Dashboard/CompanyRoadsList';
import CompanyStoragesList from '../../components/Dashboard/CompanyStoragesList';
import AddRoadForm from '../../components/Forms/AddRoadForm';
import AddStorageForm from '../../components/Forms/AddStorageForm';
import { useUser } from '../../lib/auth';

const EditMapPage = () => {
  const user = useUser();

  if (!user.data) return null;

  return (
    <main className="flex size-full flex-col gap-4 overflow-y-scroll py-4 pl-[12%] pr-[calc(12%-0.5rem)]">
      <section>
        <CompanyMap companyIds={[user.data.id]} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Ваши склады</h2>
        <CompanyStoragesList />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Добавить склад</h2>
        <AddStorageForm />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Ваши пути</h2>
        <CompanyRoadsList />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Добавить путь</h2>
        <AddRoadForm />
      </section>
    </main>
  );
};
export default EditMapPage;
