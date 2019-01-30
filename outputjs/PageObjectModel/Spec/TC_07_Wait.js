"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('protractor wait case', function () {
    it('protractor implicit ex', function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
        protractor_1.browser.manage().window().maximize();
        // browser.manage().timeouts().implicitlyWait(10000)
        // element(by.name("prompt")).click()
        // browser.switchTo().alert().accept()
        for (let i = 0; i < 60; i++) {
            let flag = false;
            protractor_1.element.all(protractor_1.by.name("prompt")).count().then(function (num) {
                if (num > 0) {
                    protractor_1.element(protractor_1.by.name("prompt")).click();
                    flag = true;
                }
                else {
                    protractor_1.browser.sleep(500);
                }
            });
            if (flag) {
                break;
            }
        }
    });
});
//# sourceMappingURL=TC_07_Wait.js.map