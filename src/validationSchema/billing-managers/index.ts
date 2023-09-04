import * as yup from 'yup';

export const billingManagerValidationSchema = yup.object().shape({
  payment_status: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
});
