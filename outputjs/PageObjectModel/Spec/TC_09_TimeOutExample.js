"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("timeoutex", function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().timeouts().pageLoadTimeout(3000);
    protractor_1.browser.manage().window().maximize();
    it("timeoutex", function () {
        protractor_1.browser.get("http://www.google.com");
        protractor_1.browser.sleep(3000);
        //element(By.id("xyx")).click();
    });
});
//# sourceMappingURL=TC_09_TimeOutExample.js.map