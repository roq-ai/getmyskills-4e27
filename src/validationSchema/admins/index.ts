import * as yup from 'yup';

export const adminValidationSchema = yup.object().shape({
  approval_status: yup.boolean().required(),
  user_id: yup.string().nullable().required(),
});
