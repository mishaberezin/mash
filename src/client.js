import * as sapper from '@sapper/app';

sapper.start({
  target: document.querySelector('#app'),
  store: data => {
    store.set(data);
    return store;
  }
});
