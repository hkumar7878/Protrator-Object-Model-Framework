"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HandleAlerts {
    static acceptAlerts(ele) {
        protractor_1.browser.sleep(3000);
        ele.click();
        protractor_1.browser.switchTo().alert().accept();
    }
    static getAlertText() {
        return protractor_1.browser.switchTo().alert().getText();
    }
}
exports.HandleAlerts = HandleAlerts;
//# sourceMappingURL=HandleAlerts.js.map