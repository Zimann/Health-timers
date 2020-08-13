import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should first have the Login form fields displayed', () => {
    page.navigateTo();
    const emailInput = element(by.css('#email'));
    emailInput.click();
    expect(element.all(by.css('#email:focus')).count()).toBe(1);
  });

  it('should move the text layer when pressing its button', () => {
    //TODO finish the assertion
    page.navigateTo();
    const floatingWrapper = element(by.css('.floating-layout-wrapper'));
    const signUpFloatButton = element(by.css('floating-text-sign-up button'));
    expect(floatingWrapper.getCssValue('marginLeft')).toBe('0px');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
