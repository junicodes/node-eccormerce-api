import * as yup from 'yup';

// Just like before, without the id field
const createProfileSchema = yup.object({
  title: yup.string().required(),
  desc: yup.string().required(),
  categories: yup.string().required(),
  sizes: yup.string(),
  colors: yup.string(),
  price: yup.string().required(),
  currency: yup.string().required()
});

export default createProfileSchema;
