import loadMore from './src/main';

/* istanbul ignore next */
loadMore.install = function(Vue) {
  Vue.component(loadMore.name, loadMore);
};

export default loadMore;
