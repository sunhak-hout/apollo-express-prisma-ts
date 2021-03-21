import { QueryResolvers } from '../../generated/types';

export const ping: QueryResolvers['ping'] = () => {
  return {
    fieldA: 'This is field A',
    fieldB: 'This is field B',
    fieldC: 'This is field C',
  };
};
