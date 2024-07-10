// User token
export const TOKEN = 'token';

// Form
export const FIELD_REQUIRED = 'Field required*';
export const FIELD_EMAIL_NOT_VALID = 'Email format not valid*';

export const REGEX_VALIDATION = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  noSpecialChars: /^[a-zñáéíóúA-ZÑÁÉÍÓÚ0-9. -]*$/,
};
