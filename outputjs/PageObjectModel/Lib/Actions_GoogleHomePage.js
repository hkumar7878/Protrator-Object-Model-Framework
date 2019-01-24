"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Locators_GoogleHomePage_1 = require("../PO/Locators_GoogleHomePage");
class Actions_GoogleHomePage {
    enterTextInSearchBarWithoutParameters() {
        Locators_GoogleHomePage_1.Locators_GoogleHomePage.searchElement.sendKeys("Protractor testing");
    }
    setTextInSearchBarWithParameter(searchTerm) {
        Locators_GoogleHomePage_1.Locators_GoogleHomePage.searchElementByNameMethod().sendKeys(searchTerm);
    }
}
exports.Actions_GoogleHomePage = Actions_GoogleHomePage;
//# sourceMappingURL=Actions_GoogleHomePage.js.map