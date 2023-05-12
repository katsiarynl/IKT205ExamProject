const PasswordValidation = /^(?=.*[a-zA-Z]?\d?[a-zA-Z]?).{6,}$/;

const ValidatePassword = (password: string) => {
  return PasswordValidation.test(password);
};

export default ValidatePassword;
