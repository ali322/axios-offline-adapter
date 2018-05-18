axios-offline-adapter
===

cache response each time, responed with cached when request in offline environment

## Install

```bash
npm i axios-offline-adapter --save
```

## Usage

add adapter in your request code

```javascript
import axios from 'axios'
import offlineAdapter from 'axios-offline-adapter'

const offline = offlineAdapter({
  name: 'axios-offline',
  adapter: axios.defaults.adapter
})

const http = axios.create({
  adapter: offline
})

http.get('/path/to/api').then(ret => {
  // bussiness code
})
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
