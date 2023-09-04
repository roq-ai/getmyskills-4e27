import axios from 'axios';
import queryString from 'query-string';
import { BillingManagerInterface, BillingManagerGetQueryInterface } from 'interfaces/billing-manager';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBillingManagers = async (
  query?: BillingManagerGetQueryInterface,
): Promise<PaginatedInterface<BillingManagerInterface>> => {
  const response = await axios.get('/api/billing-managers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBillingManager = async (billingManager: BillingManagerInterface) => {
  const response = await axios.post('/api/billing-managers', billingManager);
  return response.data;
};

export const updateBillingManagerById = async (id: string, billingManager: BillingManagerInterface) => {
  const response = await axios.put(`/api/billing-managers/${id}`, billingManager);
  return response.data;
};

export const getBillingManagerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/billing-managers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBillingManagerById = async (id: string) => {
  const response = await axios.delete(`/api/billing-managers/${id}`);
  return response.data;
};
