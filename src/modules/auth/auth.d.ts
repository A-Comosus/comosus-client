type LoginFormTypes = {
  username: string;
  password: string;
};

type SignUpFormTypes = {
  username: string;
  email: string;
  password: string;
  acceptPolicy: number;
};

type ForgetPasswordFormTypes = {
  email: string;
};

type ResetPasswordFormTypes = {
  password: string;
  confirmPassword: string;
  resetToken: string;
};

type ContactFormPropsValues = {
  customerName: string;
  email: string;
  phone: string;
  message: string;
};
