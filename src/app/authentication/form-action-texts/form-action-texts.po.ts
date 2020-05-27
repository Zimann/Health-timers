import {
  browser,
  by,
  element
} from 'protractor';
export class FormActionTextsComponent {
  navigateTo() {
    return browser.get('/login');
  }
}
