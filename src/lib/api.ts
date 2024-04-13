import { AxiosResponse } from 'axios';
import axiosInstance from './axios';
import { Client, Company, MapPoint, MapRoad, Order, Product } from '../@types/global';
import { mapTerrain } from '../assets/map';

export class FetchError extends Error {
  constructor(
    public response: AxiosResponse,
    message?: string,
  ) {
    super(message);
  }
}

export const handleApiResponse = async (response: AxiosResponse) => {
  if (response.status >= 400 || response.data.ok === false)
    throw new FetchError(response.data, `The request was rejected`);
  return response.data.info;
};

export const getUserProfile = async (): Promise<Client | Company> => {
  return axiosInstance.get('/api/me/').then(handleApiResponse);
};

export const login = async (
  data: [formData: FormData, who: 'client' | 'company'],
): Promise<Promise<void>> => {
  const [formData, who] = data;
  await axiosInstance.post('/api/login/' + who + '/', formData).then(handleApiResponse);
};

export const register = async (
  data: [formData: FormData, who: 'client' | 'company'],
): Promise<Promise<void>> => {
  const [formData, who] = data;
  await axiosInstance.post('/api/register/' + who + '/', formData).then(handleApiResponse);
};

export const logout = async (): Promise<void> => {
  await axiosInstance.post('/api/logout/').then(handleApiResponse);
};

export const getAllPoints = (): Promise<MapPoint[]> => {
  return axiosInstance
    .get('/api/cities/')
    .then(handleApiResponse)
    .then((response) =>
      response
        ? response.map((point: any) => ({
            id: +point.city_id,
            name: point.name,
            x: +point.x * mapTerrain.width,
            y: +point.y * mapTerrain.height,
            isStorage: false,
          }))
        : [],
    );
};

// I feel guilty about working with this
export const getCompanyPoints = (companyId: number): Promise<MapPoint[]> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  return axiosInstance
    .post('/api/company/cities/', formData)
    .then(handleApiResponse)
    .then((response) =>
      response
        ? response.map((point: any) => ({
            id: +point.city_id,
            name: point.name,
            x: +point.x * mapTerrain.width,
            y: +point.y * mapTerrain.height,
            isStorage: true,
          }))
        : [],
    );
};

export const addCompanyPoint = async (companyId: number, pointId: number): Promise<void> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('city_id', pointId.toString());
  await axiosInstance.post('/api/company/cities/add/', formData).then(handleApiResponse);
};

export const removeCompanyPoint = async (companyId: number, pointId: number): Promise<void> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('city_id', pointId.toString());
  await axiosInstance.post('/api/company/cities/del/', formData).then(handleApiResponse);
};

export const editCompanyPoint = async (
  companyId: number,
  cityId: number,
  isStorage: boolean,
): Promise<void> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('city_id', cityId.toString());
  formData.append('is_storage', JSON.stringify(isStorage));
  await axiosInstance.post('/api/company/cities/edit/', formData).then(handleApiResponse);
};

export const getCompanyRoads = (companyId: number): Promise<MapRoad[]> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  return axiosInstance
    .post('/api/company/roads/', formData)
    .then(handleApiResponse)
    .then((response) =>
      response
        ? response.map((point: any) => ({
            id: +point.road_id,
            startId: +point.city_start_id,
            endId: +point.city_end_id,
            time: point.time,
            cost: +point.cost,
            distance: +point.length,
            transportType: point.transport_type,
          }))
        : [],
    );
};

export const addCompanyRoad = async (companyId: number, road: MapRoad): Promise<void> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('city_start_id', road.startId.toString());
  formData.append('city_end_id', road.endId.toString());
  formData.append('transport_type', road.transportType);
  formData.append('length', road.distance.toString());
  formData.append('time', road.time);
  formData.append('cost', road.cost.toString());

  await axiosInstance.post('/api/company/roads/add/', formData).then(handleApiResponse);
};

export const removeCompanyRoad = async (companyId: number, roadId: number): Promise<void> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('road_id', roadId.toString());
  await axiosInstance.post('/api/company/roads/del/', formData).then(handleApiResponse);
};

export const getAllCompanies = (): Promise<Company[]> => {
  return axiosInstance
    .get('/api/companies/')
    .then(handleApiResponse)
    .then((response) => response ?? []); // TODO
};

export const getCompany = (companyId: number): Promise<Company> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  return axiosInstance
    .post('/api/company/', formData)
    .then(handleApiResponse)
    .then((response) => response ?? []); // TODO
};

export const getCompanyProducts = (companyId: number): Promise<Product[]> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  return axiosInstance
    .post('/api/company/products/', formData)
    .then(handleApiResponse)
    .then((response) =>
      response
        ? response.map((product: any) => ({
            id: +product.product_id,
            name: product.name,
            description: product.description,
            price: +product.cost,
            size: +product.size,
            weight: +product.weight,
            companyId: +product.company_id,
            image: product.image,
          }))
        : [],
    );
};

export const addCompanyProduct = async (companyId: number, product: Product): Promise<void> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('name', product.name);
  formData.append('cost', product.price.toString());
  formData.append('size', product.size.toString());
  formData.append('weight', product.weight.toString());
  formData.append('description', product.description);
  if (product.image) formData.append('image', product.image);

  await axiosInstance.post('/api/company/products/add/', formData).then(handleApiResponse);
};

export const removeCompanyProduct = async (productId: number): Promise<void> => {
  const formData = new FormData();
  formData.append('product_id', productId.toString());
  await axiosInstance.post('/api/company/products/del/', formData).then(handleApiResponse);
};

export const changeClientCity = async (clientId: number, cityId: number): Promise<void> => {
  const formData = new FormData();
  formData.append('client_id', clientId.toString());
  formData.append('city_id', cityId.toString());

  await axiosInstance.post('/api/client/city/', formData).then(handleApiResponse);
};

export const getClientOrders = (clientId: number): Promise<Order[]> => {
  const formData = new FormData();
  formData.append('client_id', clientId.toString());
  return axiosInstance
    .post('/api/client/orders/', formData)
    .then(handleApiResponse)
    .then((response) => response ?? []); // TODO
};

export const makeOrder = async (
  clientId: number,
  startPointId: number,
  productId: number,
): Promise<void> => {
  const formData = new FormData();
  formData.append('client_id', clientId.toString());
  formData.append('city_start_id', startPointId.toString());
  formData.append('product_id', productId.toString());

  return axiosInstance.post('/api/client/orders/order/', formData).then(handleApiResponse);
};

export const getRoutes = (
  clientId: number,
  productId: number,
  transportType: 'length' | 'time' | 'cost',
): Promise<number[][]> => {
  const formData = new FormData();
  formData.append('client_id', clientId.toString());
  formData.append('product_id', productId.toString());
  formData.append('by', transportType);

  return axiosInstance
    .post('/api/client/orders/make_route/', formData)
    .then(handleApiResponse)
    .then((response) => response ?? []);
};

export const getProduct = (productId: number): Promise<Product | undefined> => {
  const formData = new FormData();
  formData.append('product_id', productId.toString());

  return axiosInstance
    .post('/api/product/', formData)
    .then(handleApiResponse)
    .then((response) =>
      response
        ? {
            id: +response.product_id,
            name: response.name,
            description: response.description,
            price: +response.cost,
            size: +response.size,
            weight: +response.weight,
            companyId: +response.company_id,
            image: response.image,
          }
        : undefined,
    );
};

export const getAllProducts = (): Promise<Product[]> => {
  return axiosInstance
    .get('/api/products/')
    .then(handleApiResponse)
    .then((response) =>
      response
        ? response.map((product: any) => ({
            id: +product.product_id,
            name: product.name,
            description: product.description,
            price: +product.cost,
            size: +product.size,
            weight: +product.weight,
            companyId: +product.company_id,
            image: product.image,
          }))
        : [],
    );
};
