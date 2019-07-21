import LoadMore from './src/main';

/* istanbul ignore next */
LoadMore.install = function(Vue) {
  Vue.component(LoadMore.name, LoadMore);
};

export default LoadMore;
