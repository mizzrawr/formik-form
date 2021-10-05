import * as yup from 'yup';

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('you better type this out'),
  password: yup.string().min(5).max(11).required(),
});
