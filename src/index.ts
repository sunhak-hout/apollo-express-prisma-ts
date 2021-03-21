import 'dotenv/config';
import { app } from './libs/app';
import { server } from './server';

const { PORT } = process.env;

server.applyMiddleware({ app, path: '/graphql' });

app.listen(PORT, () => {
  console.log(`Server runing on hostname:${PORT}${server.graphqlPath}`);
});
