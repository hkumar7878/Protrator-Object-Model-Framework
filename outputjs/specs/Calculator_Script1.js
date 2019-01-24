"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Calcualtor test suite", function () {
    beforeEach(function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        protractor_1.browser.manage().window().maximize();
        console.log("Inside before test");
    });
    it("Check website launch", function () {
        expect(protractor_1.browser.getTitle()).toContain("Super");
        protractor_1.browser.sleep(7000);
        console.log("inside first IT block");
    });
    it("Check Sum of 2 number", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("5");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("25");
        protractor_1.element(protractor_1.by.id("gobutton")).click;
        protractor_1.browser.sleep(7000);
        console.log("inside Second IT block");
    });
});
//# sourceMappingURL=Calculator_Script1.js.map