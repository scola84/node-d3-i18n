import { I18n } from '@scola/i18n';

let instance = null;

function i18n() {
  if (!instance) {
    instance = new I18n();
  }

  return instance;
}

export {
  i18n
};
