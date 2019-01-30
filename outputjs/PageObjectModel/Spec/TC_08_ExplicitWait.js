"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const genericUtil_1 = require("../utils/genericUtil");
describe("Explicit wait ex", function () {
    protractor_1.browser.ignoreSynchronization = true;
    it("Explicit wait example", function () {
        protractor_1.browser.get("https://chercher.tech/practice/explicit-wait-sample-selenium-webdriver");
        protractor_1.browser.manage().window().maximize();
        // element(by.id("populate-text")).click()
        // browser.wait(ec.textToBePresentInElement(element(by.className('target-text')),"Selenium Webdriver")
        //,11000)
        //element(by.id("display-other-button")).click()
        //browser.wait(ec.elementToBeClickable(element(by.id("hidden"))),11000)
        genericUtil_1.genericUtil.clickElement(protractor_1.element(protractor_1.by.id("ch")));
    });
});
//# sourceMappingURL=TC_08_ExplicitWait.js.map