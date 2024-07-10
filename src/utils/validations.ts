import * as Yup from 'yup';

import {
  FIELD_REQUIRED,
  FIELD_EMAIL_NOT_VALID,
  REGEX_VALIDATION,
} from '@constants/index';

export const googleCredentialsSchema = Yup.object().shape({
  email: Yup.string()
    .required(FIELD_REQUIRED)
    .matches(REGEX_VALIDATION.email, FIELD_EMAIL_NOT_VALID),
  password: Yup.string()
    .required(FIELD_REQUIRED)
    .min(7, 'Password must be at least 7 characters*')
    .max(21, 'Password must be at most 21 characters*'),
  // noSpecialChars validation disable tmp because is need to enter password saved by google key pass
  // .matches(
  //   REGEX_VALIDATION.noSpecialChars,
  //   'Password, no special characters*',
  // ),
});
