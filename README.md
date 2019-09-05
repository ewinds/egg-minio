# egg-rsmq

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-rsmq.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-rsmq
[travis-image]: https://img.shields.io/travis/eggjs/egg-rsmq.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-rsmq
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-rsmq.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-rsmq?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-rsmq.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-rsmq
[snyk-image]: https://snyk.io/test/npm/egg-rsmq/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-rsmq
[download-image]: https://img.shields.io/npm/dm/egg-rsmq.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-rsmq

Paginator for egg-mysql

## Install

```bash
$ npm i egg-rsmq --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mysqlPaginator = {
  enable: true,
  package: "egg-rsmq"
};
```

## Example

```javascript
// query
const results = await app.mysqlPaginator.query('posts',{
  where: { status: 'draft' },
  orders: [['created_at','desc'], ['id','desc']],
  page: 1,
  size: 10
});
// result
  {
    pagination: {
      total: 21,
      size: 10,
      currentPage: 1,
      lastPage: 3,
      from: 0,
      to: 10
    },
    data: [...]
  }
```

### Fuzzy query

```javascript
const results = await app.mysqlPaginator.query("posts", {
  where: "WHERE name LIKE %name%",
  orders: [["created_at", "desc"], ["id", "desc"]],
  page: 1,
  size: 10
});
```

### Customized order by

```javascript
const results = await app.mysqlPaginator.query("posts", {
  where: "WHERE name LIKE %name%",
  orders: "rank+",
  page: 1,
  size: 10
});
```

## License

[MIT](LICENSE)
