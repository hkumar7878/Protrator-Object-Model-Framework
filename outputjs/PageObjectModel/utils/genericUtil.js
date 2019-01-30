"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
class genericUtil {
    static clickElement(ele) {
        protractor_1.browser.wait(protractor_2.ExpectedConditions.presenceOf(ele), 15000);
        protractor_1.element(ele).click;
    }
    static clickUsingXpath(xp) {
        protractor_1.browser.wait(protractor_2.ExpectedConditions.presenceOf(protractor_1.element(protractor_1.by.xpath(xp))), 8000);
        protractor_1.element(protractor_1.by.xpath(xp)).click();
    }
}
exports.genericUtil = genericUtil;
//# sourceMappingURL=genericUtil.js.map