"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HandleAlerts_1 = require("../utils/HandleAlerts");
describe('Handling alerts', function () {
    beforeEach(function () {
    });
    protractor_1.browser.ignoreSynchronization = true;
    it('Alerts testing', function () {
        protractor_1.browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
        protractor_1.browser.manage().window().maximize();
        //browser.switchTo().alert().accept()
        // While creating the object of class
        // let handlealerts= new HandleAlerts()
        HandleAlerts_1.HandleAlerts.acceptAlerts(protractor_1.element(protractor_1.by.name("prompt")));
        // HandleAlerts.getAlertText();
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=TC_06_Test_Alerts.js.map