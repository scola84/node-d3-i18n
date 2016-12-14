import { I18n } from '@scola/core';

let instance = null;

export function i18n() {
  if (!instance) {
    instance = new I18n();
  }

  return instance;
}
