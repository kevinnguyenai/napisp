const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8080
  },
  mongo: {
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/napisp'
  },
  redis: {
    url: process.env.REDIS_DB_URI || 'redis://localhost/0'
  },
  kafka: {
    url: process.env.KAFKA_URI || '42.116.254.153:9092',
    id: process.env.KAFKA_ID || 'app_producer_test',
    buffering: process.env.KAFKA_BUFFER || 1000,
    batchnum: process.env.KAFKA_BATCHNUM || 500,
    ack: 1,
    keepalive: true,
    api: true,
    codec: 'none'
  }
}

module.exports = config
