'use strict';

const minio = require('./lib/minio');

module.exports = app => {
  app.minio = minio(app);
  app.coreLogger.info('[egg-minio] is ready');
};
