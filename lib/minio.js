'use strict';

const Minio = require('minio');

module.exports = app => {
  const client = new Minio.Client({
    endPoint: app.config.minio.endPoint,
    port: app.config.minio.port,
    useSSL: app.config.minio.useSSL,
    accessKey: app.config.minio.accessKey,
    secretKey: app.config.minio.secretKey,
  });

  return client;
};
