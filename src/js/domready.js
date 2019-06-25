const eventReady = 'DOMContentLoaded';

let callbacks = [];
let isReady = false;

const onReady = () => {
  isReady = true;
  callbacks.forEach(fn => fn.call());
  document.removeEventListener(eventReady, onReady);
};

export default function ready(fn, ready = isReady) {
  if (ready) {
    fn.call();
  } else {
    callbacks.push(fn);
  }
}

document.addEventListener(eventReady, onReady);
