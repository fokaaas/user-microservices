import * as process from 'process';

export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  rmqUrl: process.env.RMQ_URL,
});