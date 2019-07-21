import Button from './Button';
import loading from './loading';
import loadMore from './loadMore';

const components = [
  Button,
  loadMore,
  loading
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install, // 全量引入
  Button,
  loadMore,
  loading
};
