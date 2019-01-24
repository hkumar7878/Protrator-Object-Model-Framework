"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Google Search item feature", function () {
    protractor_1.browser.ignoreSynchronization = true;
    beforeAll(function () {
        console.log("BEFORE ALL THE SCENARIOS");
    });
    afterAll(function () {
        console.log("AFTER ALL THE SCENARIOS");
    });
    beforeEach(function () {
        protractor_1.browser.get("http://google.com");
    });
    it("Google Serach mulitple elements", function () {
        protractor_1.element.all(protractor_1.by.tagName("a")).getText().then(function (texts) {
            //console.log(texts)
            for (let i = 0; i < texts.length; i++) {
                console.log(texts[i]);
            }
            expect("testing").toBe("test");
        });
        protractor_1.browser.sleep(5000);
    });
});
//# sourceMappingURL=Spec_05_Finding Multiple WebElements.js.map