import * as process from 'process';

export default () => ({
  rmqUrl: process.env.RMQ_URL,
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
  },
});
