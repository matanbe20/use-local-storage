# use-local-storage

A small package for using local storage.

## installation

```
npm i --save use-local-storage

```

### Usage

```javascript
import useLocalStorage from  'use-local-storage'

useLocalStorage.set('key', value); // set a value for a specific key 

useLocalStorage.get('key'); // get value by key name

useLocalStorage.removeItem('key');// remove item by keyName

useLocalStorage.clearAll(); // deletes the user entire local storage.
```


#### Licence
MIT