import { rule } from 'graphql-shield';
import { Unauthorized } from '../libs/errors';

export const isAuth = rule()(async (parent, args, { user }, info) => {
  if (!!user) return true;
  const detail = `'${info.fieldName}' of type '${info.parentType.name}'`;
  return new Unauthorized(`Require authentication to access ${detail}`);
});
