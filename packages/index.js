import Button from './Button';
import Loading from './Loading';
import LoadMore from './LoadMore';

const components = [
  Button,
  LoadMore,
  Loading
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
  LoadMore,
  Loading
};
