'use strict';

const Minio = require('minio');

module.exports = app => {
  const client = new Minio.Client({
    endPoint: app.config.endPoint,
    port: app.config.port,
    useSSL: app.config.useSSL,
    accessKey: app.config.accessKey,
    secretKey: app.config.secretKey,
  });

  return client;
};
