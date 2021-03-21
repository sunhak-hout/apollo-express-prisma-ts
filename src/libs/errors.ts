import { ApolloError } from 'apollo-server-express';

type ErrorName =
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'BAD_REQUEST'
  | 'UNPROCESSABLE_ENTITY'
  | 'INTERNAL_SERVER_ERROR';

class CustomApolloError extends ApolloError {
  constructor(message: string, code: ErrorName) {
    super(message, code);
  }
}

export class BadRequest extends CustomApolloError {
  constructor(message: string) {
    super(message, 'BAD_REQUEST');
  }
}

export class Unauthorized extends CustomApolloError {
  constructor(message: string) {
    super(message, 'UNAUTHORIZED');
  }
}

export class Forbidden extends CustomApolloError {
  constructor(message: string) {
    super(message, 'FORBIDDEN');
  }
}

export class NotFound extends CustomApolloError {
  constructor(message: string) {
    super(message, 'NOT_FOUND');
  }
}

export class UnprocessableEntity extends CustomApolloError {
  constructor(message: string) {
    super(message, 'UNPROCESSABLE_ENTITY');
  }
}

export class InternalServerError extends CustomApolloError {
  constructor(message: string) {
    super(message, 'INTERNAL_SERVER_ERROR');
  }
}
