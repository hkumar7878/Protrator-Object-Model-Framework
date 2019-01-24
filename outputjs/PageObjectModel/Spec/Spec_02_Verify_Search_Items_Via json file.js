"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Actions_GoogleHomePage_1 = require("../Lib/Actions_GoogleHomePage");
const protractor_1 = require("protractor");
describe("Google Search item feature", function () {
    let obj_Actions_GoogleHomePage = new Actions_GoogleHomePage_1.Actions_GoogleHomePage();
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().timeouts().implicitlyWait(2000);
    protractor_1.browser.manage().window().maximize();
    it("Google Serach", function () {
        protractor_1.browser.get("http://google.com");
        protractor_1.browser.getTitle().then(function (title) {
            expect(title).toBe("Google");
        });
        //googlelib.enterTextInSearchBarWithoutParameters();
        // Import json file
        let searchVal = require("googleparameter.json");
        obj_Actions_GoogleHomePage.setTextInSearchBarWithParameter(searchVal);
        protractor_1.browser.sleep(5000);
    });
});
//# sourceMappingURL=Spec_02_Verify_Search_Items_Via json file.js.map