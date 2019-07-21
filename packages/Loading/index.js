import loading from './src/main';

/* istanbul ignore next */
loading.install = function(Vue) {
  Vue.component(loading.name, loading);
};

export default loading;
