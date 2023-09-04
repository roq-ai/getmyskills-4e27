import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_date: yup.date().required(),
  booking_status: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
  trainer_id: yup.string().nullable().required(),
});
