import * as yup from 'yup';

// Just like before, without the id field
const updateProfileSchema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string(),
  username: yup.string(),
});

export default updateProfileSchema;