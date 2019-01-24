"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Locators_GoogleHomePage {
    // using method
    static searchElementByNameMethod() {
        console.log("Searching bar element");
        return protractor_1.element(protractor_1.by.name("q"));
    }
}
// using variable
Locators_GoogleHomePage.searchElement = protractor_1.element(protractor_1.by.name("q"));
exports.Locators_GoogleHomePage = Locators_GoogleHomePage;
//# sourceMappingURL=Locators_GoogleHomePage.js.map