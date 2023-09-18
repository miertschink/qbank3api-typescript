# qbank3api-typescript
A TypeScript-Wrapper for QBank 3's API. Provides a simple way to communicate with QBank 3 from TypeScript

## Contribute
This is a very early version of this wrapper and it's a port from the [official PHP-Wrapper](https://bitbucket.org/qbnk/qbank3api-phpwrapper/src/master/)

It's highly appreciated if you want to contribute to this project. 

## Usage
```
import {QbankApi} from 'qbank3api-typescript';

const qbankApi = new QbankApi(config.qbankApi.apiEndpoint, {
  username: '<YOUR_API_USERNAME>',
  password: '<YOUR_API_PASSWORD>',
  clientId: '<YOUR_API_CLIENT_ID>',
});
await qbankApi.connect();
await qbankApi.media().updateProperties(mediaId, [
  {
    key: 'product_data',
    value: JSON.stringify(productData),
  },
]);
```
