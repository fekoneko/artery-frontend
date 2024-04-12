import { AxiosResponse } from 'axios';
import axiosInstance from './axios';
import { Client, Company, MapPoint, MapRoad } from '../@types/global';

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

export const login = (data: [formData: FormData, who: 'client' | 'company']): void => {
  const [formData, who] = data;
  axiosInstance.post('/api/login/' + who + '/', formData).then(handleApiResponse);
};

export const register = (data: [formData: FormData, who: 'client' | 'company']): void => {
  const [formData, who] = data;
  axiosInstance.post('/api/register/' + who + '/', formData).then(handleApiResponse);
};

export const logout = (): void => {
  axiosInstance.post('/api/logout/').then(handleApiResponse);
};

export const getAllPoints = (): Promise<MapPoint[]> => {
  return axiosInstance
    .get('/api/cities/')
    .then(handleApiResponse)
    .then((response) => response ?? []);
};

// I feel guilty about working with this
export const getCompanyPoints = (companyId: number): Promise<MapPoint[]> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  return axiosInstance
    .post('/api/company/cities/', formData)
    .then(handleApiResponse)
    .then((response) => response ?? []);
};

export const addCompanyPoint = (companyId: number): void => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  axiosInstance.post('/api/company/cities/add/', formData).then(handleApiResponse);
};

export const removeCompanyPoint = (companyId: number, pointId: number): void => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('city_id', pointId.toString());
  axiosInstance.post('/api/company/cities/del/', formData).then(handleApiResponse);
};

export const editCompanyPoint = (companyId: number, cityId: number, isStorage: boolean): void => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('city_id', cityId.toString());
  formData.append('is_storage', JSON.stringify(isStorage));
  axiosInstance.post('/api/company/cities/edit/', formData).then(handleApiResponse);
};

export const getCompanyRoads = (companyId: number): Promise<MapRoad[]> => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  return axiosInstance
    .post('/api/company/roads/', formData)
    .then(handleApiResponse)
    .then((response) => response ?? []);
};

export const addCompanyRoad = (companyId: number, road: MapRoad): void => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('city_start_id', road.startId.toString());
  formData.append('city_end_id', road.endId.toString());
  formData.append('transport_type', road.transportType);
  formData.append('length', road.distance.toString());
  formData.append('time', road.time.toString());
  formData.append('cost', road.cost.toString());

  axiosInstance.post('/api/company/roads/add/', formData).then(handleApiResponse);
};

export const removeCompanyRoad = (companyId: number, roadId: number): void => {
  const formData = new FormData();
  formData.append('company_id', companyId.toString());
  formData.append('road_id', roadId.toString());
  axiosInstance.post('/api/company/roads/del/', formData).then(handleApiResponse);
};
