"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const DropDown_Util_1 = require("..//utils//DropDown_Util");
describe("Drop down ex", function () {
    it("drop down ex", function () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get('http://www.globalsqa.com/demo-site/select-dropdown-menu/');
        //element(By.xpath("//select")).click
        let dropDown_Obj = new DropDown_Util_1.DropDown_Util(protractor_1.element(protractor_1.By.xpath("//select")));
        dropDown_Obj.selectByVisibleText("Cyprus");
        protractor_1.browser.sleep(5000);
    });
});
//# sourceMappingURL=TC_10_DropDownSelection.js.map