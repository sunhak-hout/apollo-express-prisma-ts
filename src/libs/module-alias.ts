import moduleAlias from 'module-alias';
import 'module-alias/register';

const basePath = `${__dirname}/../`;

moduleAlias.addAliases({
  '@libs': `${basePath}/libs/`,
  '@resolvers': `${basePath}/resolvers/`,
});
