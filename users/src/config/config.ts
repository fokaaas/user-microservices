import * as process from 'process';

export default () => ({
  databaseUrl: process.env.DATABASE_URL,
  rmqUrl: process.env.RMQ_URL,
});
