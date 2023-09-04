import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BillingManagerInterface {
  id?: string;
  payment_status: boolean;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BillingManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
