import * as process from 'process';

export default () => ({
  port: parseInt(process.env.PORT) || 4455,
  rmqUrl: process.env.RMQ_URL,
});