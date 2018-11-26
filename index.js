// This is a localStroage helper when using Nextjs.

const useLocalStorage = {
  set: (key, data) => {
    if (!key || !data)
      return console.error('useLocalStorage : Missing params -> key or data');
    if (checkForWindow()) {
      const stringifiedData = JSON.stringify(data);
      window.localStorage.setItem(key, stringifiedData);
    }
  },

  get: key => {
    if (!key) return console.error('useLocalStorage : Missing params -> key');
    if (checkForWindow()) {
      const stringifiedData = window.localStorage.getItem(key);
      if (!stringifiedData)
        return console.error(
          `useLocalStorage : Did not found data for key '${key}'`
        );
      return JSON.parse(stringifiedData);
    }
  },

  removeItem: key => {
    if (!key) return console.error('useLocalStorage : Missing params -> key');
    if (checkForWindow()) {
      window.localStorage.removeItem(key);
    }
  },

  clearAll: () => {
    if (checkForWindow()) {
      window.localStorage.clear();
    }
  }
};

const checkForWindow = () => {
  if (typeof Window === 'undefined') {
    console.error(`useLocalStorage: window is not available. The Window Object is not available,\n
    You are probobly trying to access it while rendering on server-side.\n
    Try calling the method on 'ComponentDidMount' method.
   `);
    return false;
  }
  return true;
};

module.exports = useLocalStorage;
