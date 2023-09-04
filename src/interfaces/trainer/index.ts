import { BookingInterface } from 'interfaces/booking';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TrainerInterface {
  id?: string;
  skill_set: string;
  availability: any;
  location: string;
  experience: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  user?: UserInterface;
  _count?: {
    booking?: number;
  };
}

export interface TrainerGetQueryInterface extends GetQueryInterface {
  id?: string;
  skill_set?: string;
  location?: string;
  experience?: string;
  user_id?: string;
}
