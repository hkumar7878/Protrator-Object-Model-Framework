"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('protractor wait case', function () {
    it('protractor implicit ex', function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(10000);
        protractor_1.element(protractor_1.by.name("prompt")).click();
        protractor_1.browser.switchTo().alert().accept();
    });
});
//# sourceMappingURL=TC_07_Wait.js.map