"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Drop down ex", function () {
    it("drop down ex", function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('http://www.globalsqa.com/demo-site/select-dropdown-menu/');
        protractor_1.element(protractor_1.By.xpath('//select')).click();
        protractor_1.element(protractor_1.By.xpath("//option[@value='BMU']")).click();
        protractor_1.browser.sleep(10000);
    });
});
//# sourceMappingURL=TC_10_DropDownSelection.js.map