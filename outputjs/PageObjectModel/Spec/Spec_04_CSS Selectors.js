"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Google Search item feature", function () {
    protractor_1.browser.ignoreSynchronization = true;
    it("Google Serach", function () {
        protractor_1.browser.get("http://google.com");
        protractor_1.element(protractor_1.by.css(".gLFyf.gsfi")).sendKeys("testing css selector");
        protractor_1.browser.sleep(5000);
    });
});
//# sourceMappingURL=Spec_04_CSS Selectors.js.map