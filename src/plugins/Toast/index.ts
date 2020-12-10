import { VueConstructor } from "vue";
import ToastContainer from "./ToastContainer.vue";

function randint(): number {
  const maximum = 100000;
  const minimum = 0;
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

interface ToastFunction {
  (message: string): void;
}

interface ToastPlugin {
  info: ToastFunction;
  warn: ToastFunction;
  error: ToastFunction;
  success: ToastFunction;
}

declare module "vue/types/vue" {
  // 3. Declare augmentation for Vue
  interface Vue {
    $toast: ToastPlugin;
  }
}

interface ToastOption {
  style?: string;
  timeout?: number;
}

interface ToastItem {
  id: number;
  msg: string;
  style: string;
}

interface ToastItemOption {
  msg: string;
  style: string;
}

const Toast = {
  install(Vue: VueConstructor, options: ToastOption) {
    // Parsing options
    if (!options) options = {};
    if (options.style === undefined) options.style = "";
    if (options.timeout === undefined) options.timeout = 5000;

    const toasts: ToastItem[] = [];
    const idmap = new Set();

    const show = function(opt: ToastItemOption) {
      let id = randint();
      while (idmap.has(id)) {
        id = randint();
      }
      idmap.add(id);
      // console.log(id);

      const newItem: ToastItem = { id: id, msg: opt.msg, style: opt.style };

      toasts.push(newItem);
      // console.log(toasts);

      setTimeout(() => {
        const index = toasts.indexOf(newItem);
        if (index !== -1) {
          idmap.delete(newItem.id);
          toasts.splice(index, 1);
        }
      }, options.timeout);
    };

    Vue.prototype.$toast = {
      // toasts: toasts,

      // show: show,
      success(msg: string) {
        show({ msg: msg, style: "background: #cde2d4; color: #31363b;" });
      },
      info(msg: string) {
        show({
          msg: msg,
          style: "background: #ebebeb; color: rgba(0, 0, 0, .8);"
        });
      },
      error(msg: string) {
        show({ msg: msg, style: "background: #f8c8c8; color: #5e3a39;" });
      },
      warn(msg: string) {
        show({ msg: msg, style: "background: #fadcb4; color: #5e4c33;" });
      }
    } as ToastPlugin;

    const container = new Vue({
      data: {
        toasts: toasts
      },
      render: (h: any) => h(ToastContainer),
      components: { ToastContainer }
    });
    container.$mount();
    document.body.appendChild(container.$el);
    console.log("install toast");
  }
};

export default Toast;
