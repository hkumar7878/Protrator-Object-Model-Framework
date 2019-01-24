"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Actions_GoogleHomePage_1 = require("../Lib/Actions_GoogleHomePage");
const excelReading_1 = require("../excelUtil/excelReading");
const protractor_1 = require("protractor");
const logUtility_1 = require("../../Logging/logUtility");
describe("Google Search item feature", function () {
    let obj_Actions_GoogleHomePage = new Actions_GoogleHomePage_1.Actions_GoogleHomePage();
    let obj_excelUtil = new excelReading_1.ExcelUtility();
    let log = logUtility_1.Logger.logger;
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().timeouts().implicitlyWait(2000);
    protractor_1.browser.manage().window().maximize();
    it("Google Serach", function () {
        protractor_1.browser.get("http://google.com");
        log.info("Latest logs to check npm test");
        protractor_1.browser.getTitle().then(function (title) {
            expect(title).toBe("Google");
            log.info("The title is " + title);
        });
        obj_excelUtil.readExcel("D:\\Protractor Framework - Page Object Model\\GoogleTestData.xlsx", "Sheet1", 1, 1).then(function (excelValue) {
            obj_Actions_GoogleHomePage.setTextInSearchBarWithParameter(excelValue);
            log.info("Searched item is " + excelValue);
            log.log("warn", "Latest logs to check npm test");
        });
        protractor_1.browser.sleep(5000);
    });
});
//# sourceMappingURL=Spec_03_Verify_Search_Item_Via_ExcelFile.js.map