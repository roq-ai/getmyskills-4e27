import * as yup from 'yup';

export const trainerValidationSchema = yup.object().shape({
  skill_set: yup.string().required(),
  availability: yup.date().required(),
  location: yup.string().required(),
  experience: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
