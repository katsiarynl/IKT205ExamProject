export const EmailsValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const ValidateEmail = (email) => {
  return EmailsValidation.test(email);
};

export default ValidateEmail;
