import { sign, verify } from 'jsonwebtoken';

export const verifyToken = (token: string, secret: string) => {
  try {
    return verify(token, secret) as SignTokenOptions;
  } catch (err) {
    return null;
  }
};

export const signToken = ({ email, secret }: SignTokenOptions) => {
  return sign({ email }, secret, { expiresIn: '30 days' });
};

interface SignTokenOptions {
  email: string;
  secret: string;
}
