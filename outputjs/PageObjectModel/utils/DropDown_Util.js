"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class DropDown_Util {
    constructor(dropDown) {
        this.actualDropDown = dropDown;
    }
    selectByVisibleText(txt) {
        this.actualDropDown.click();
        this.actualDropDown.element(protractor_1.By.xpath("//option[text()='" + txt + "']")).click();
    }
}
exports.DropDown_Util = DropDown_Util;
//# sourceMappingURL=DropDown_Util.js.map