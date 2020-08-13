export interface SignUpResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export enum ResponsesMessages {
  FAILED_SIGNUP_MESSAGE = `There was a problem with the sign up or the email address is already registered!`,
  FAILED_LOGIN_MESSAGE = 'The email/password is incorrect'
}
