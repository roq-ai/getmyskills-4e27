import { UserInterface } from 'interfaces/user';
import { TrainerInterface } from 'interfaces/trainer';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  booking_date: any;
  booking_status: boolean;
  user_id: string;
  trainer_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  trainer?: TrainerInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  trainer_id?: string;
}
